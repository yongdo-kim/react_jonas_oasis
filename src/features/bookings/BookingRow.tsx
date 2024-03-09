import { format, isToday } from "date-fns";

import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";

import { HiArrowDownOnSquare, HiArrowUpOnSquare, HiEye } from "react-icons/hi2";

import { useNavigate } from "react-router";
import Button from "../../ui/Button";
import Menus from "../../ui/Menus";
import Tag from "../../ui/Tag";
import { CabinProp } from "../cabins/CabinRow";
import styles from "./BookingRow.module.css";
import { useCheckout } from "./useCheckout";

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
        </Menus.List>
      </Menus.Menu>
    </div>
  );
}

export default BookingRow;
