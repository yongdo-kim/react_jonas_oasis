import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";

import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import Tag from "../../ui/Tag";
import { CabinProp } from "../cabins/CabinRow";
import styles from "./BookingRow.module.css";
import { useCheckout } from "./useCheckout";
import { useDeleteBooking } from "./useDeleteBooking";

export type BookingProps = {
  cabinId: number | null;
  cabinPrice: number | null;
  created_at: string;
  endDate: string | null;
  extrasPrice: number | null;
  guestId: number | null;
  hasBreakfast: boolean | null;
  id: number;
  isPaid: boolean | null;
  numGuests: number | null;
  numNights: number | null;
  observation: string | null;
  startDate: string | null;
  status: string | null;
  totalPrice: number | null;
};

//TODO: 이동예정
export type GuestProps = {
  countryFlag?: string | null;
  created_at?: string;
  email?: string | null;
  fullName?: string | null;
  id?: number;
  nationalID?: string | null;
  nationality?: string | null;
};

function BookingRow({
  booking,
  cabin,
  guest,
}: {
  cabin: CabinProp;
  booking: BookingProps;
  guest: GuestProps;
}) {
  const navigate = useNavigate();
  const { checkout } = useCheckout();
  const { deletebook } = useDeleteBooking();

  return (
    <div className={styles.tableRow}>
      <div className={styles.cabin}>{cabin.name}</div>
      <div className={styles.stacked}>
        <span>{guest.fullName}</span>
        <span>{guest.email}</span>
      </div>
      <div className={styles.stacked}>
        <span>
          {isToday(new Date(booking.startDate!))
            ? "Today"
            : formatDistanceFromNow(booking.startDate!)}{" "}
          &rarr; {booking.numNights} night stay
        </span>
        <span>
          {format(new Date(booking.startDate!), "MMM dd yyyy")} &mdash;{" "}
          {format(new Date(booking.endDate!), "MMM dd yyyy")}
        </span>
      </div>

      <Tag
        status={booking.status!}
        children={booking.status?.replace("-", " ")}
      />
      <div className={styles.amount}>
        {formatCurrency(booking.totalPrice ?? 0)}
      </div>

      <Modal
        children={
          <>
            <Menus.Menu>
              <Menus.Toggle id={booking.id} />
              <Menus.List id={booking.id}>
                <Menus.Button
                  children={
                    <>
                      <HiEye />
                      See Details
                    </>
                  }
                  onClick={() => navigate(`/bookings/${booking.id}`)}
                />

                {booking.status == "unconfirmed" && (
                  <Button
                    children={
                      <>
                        <HiArrowDownOnSquare />
                        Check in
                      </>
                    }
                    onClick={() => navigate(`/checkin/${booking.id}`)}
                  />
                )}

                {booking.status == "checked-in" && (
                  <Button
                    children={
                      <>
                        <HiArrowUpOnSquare />
                        Check out
                      </>
                    }
                    onClick={() => checkout(booking.id.toString())}
                  />
                )}

                <Modal.Open opensWindowName='delete'>
                  <Menus.Button
                    children={
                      <>
                        <HiTrash />
                        {"DELTE"}
                      </>
                    }
                  />
                </Modal.Open>
              </Menus.List>
            </Menus.Menu>
            <Modal.Window
              opensWindowName='delete'
              children={
                <ConfirmDelete
                  resourceName='delete'
                  disabled={false}
                  onConfirm={() => {
                    deletebook(booking.id.toString());
                  }}
                  onCloseModal={() => {}}
                />
              }
            />
          </>
        }
      />
    </div>
  );
}

export default BookingRow;
