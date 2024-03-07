import { format, isToday } from "date-fns";

import { formatCurrency } from "../../utils/helpers";
import { formatDistanceFromNow } from "../../utils/helpers";

import styles from "./BookingRow.module.css";
import Tag from "../../ui/Tag";
import { CabinProp } from "../cabins/CabinRow";

type BookingProps = {
  cabinId: number | null;
  cabinPrice: number | null;
  created_at: string;
  endDate: string | null;
  extraPrice: number | null;
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
type GuestProps = {
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

      {/* type={statusToTagName[booking.status!]} */}
      <Tag
        status={booking.status!}
        children={booking.status?.replace("-", " ")}
      />

      <div className={styles.amount}>
        {formatCurrency(booking.totalPrice ?? 0)}
      </div>
    </div>
  );
}

export default BookingRow;
