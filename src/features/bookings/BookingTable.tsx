import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";

import styles from "./BookingTable.module.css";
import useBookings from "./useBookings";

function BookingTable() {
  const { isLoading, bookings } = useBookings();

  if (!bookings) return <Empty resource={"Bookings"} />;
  if (isLoading) return <Spinner />;

  console.log(bookings);
  return (
    <Menus>
      <div className={styles.table}>
        <div className={styles.tableHeader}>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </div>

        <div className={styles.tableBody}>
          {bookings?.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              cabin={booking.cabins!}
              guest={booking.guests!}
            />
          ))}
        </div>
      </div>
    </Menus>
  );
}

export default BookingTable;
