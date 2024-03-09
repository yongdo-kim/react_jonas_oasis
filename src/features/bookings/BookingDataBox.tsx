import styles from "./BookingDataBox.module.css";

import { format, isToday } from "date-fns";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineCheckCircle,
  HiOutlineCurrencyDollar,
  HiOutlineHomeModern,
} from "react-icons/hi2";

import DataItem from "../../ui/DataItem";
import Flag from "../../ui/Flag";
import Header from "../../ui/Header";
import { formatCurrency, formatDistanceFromNow } from "../../utils/helpers";
import { CabinProp } from "../cabins/CabinRow";
import { BookingProps, GuestProps } from "./BookingRow";

// A purely presentational component
function BookingDataBox({
  booking,
  guest,
  cabin,
}: {
  cabin: CabinProp;
  booking: BookingProps;
  guest: GuestProps;
}) {
  return (
    <div className={styles.styledBookingDataBox}>
      <Header>
        <HiOutlineHomeModern />
        <p>
          {booking.numNights} nights in Cabin <span>{cabin.name}</span>
        </p>
        <p>
          {format(new Date(booking.startDate!), "EEE, MMM dd yyyy")} (
          {isToday(new Date(booking.startDate!))
            ? "Today"
            : formatDistanceFromNow(booking.startDate!)}
          ) &mdash; {format(new Date(booking.endDate!), "EEE, MMM dd yyyy")}
        </p>
      </Header>

      <div className={styles.section}>
        <div className={styles.guest}>
          {guest.countryFlag && (
            <Flag
              src={guest.countryFlag}
              alt={`Flag of ${guest.nationality}`}
            />
          )}
          <p>
            {guest.fullName}{" "}
            {booking.numGuests! > 1 ? `+ ${booking.numGuests! - 1} guests` : ""}
          </p>
          <span>&bull;</span>
          <p>{guest.email}</p>
          <span>&bull;</span>
          <p>National ID {guest.nationalID}</p>
        </div>

        {booking.observation && (
          <DataItem
            icon={<HiOutlineChatBubbleBottomCenterText />}
            label='Observations'
          >
            {booking.observation}
          </DataItem>
        )}

        <DataItem icon={<HiOutlineCheckCircle />} label='Breakfast included?'>
          {booking.hasBreakfast ? "Yes" : "No"}
        </DataItem>

        <div
          className={`${styles.price} ${booking.isPaid ? styles.paid : null}`}
        >
          <DataItem icon={<HiOutlineCurrencyDollar />} label={`Total price`}>
            {formatCurrency(booking.totalPrice)}

            {booking.hasBreakfast &&
              ` (${formatCurrency(booking.cabinPrice)} cabin + ${formatCurrency(
                booking.extrasPrice
              )} breakfast)`}
          </DataItem>

          <p>{booking.isPaid ? "Paid" : "Will pay at property"}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <p>
          Booked {format(new Date(booking.created_at), "EEE, MMM dd yyyy, p")}
        </p>
      </div>
    </div>
  );
}

export default BookingDataBox;
