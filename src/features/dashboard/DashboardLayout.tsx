import Spinner from "../../ui/Spinner";
import useCabins from "../cabins/useCabins";
import styles from "./DashboardLayout.module.css";
import SalesChart from "./SalesChart";
import Stats from "./Stats";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";

export default function DashboardLayout() {
  const { isRecentBooking, recentBookings, numDays } = useRecentBookings();
  const { isRecentStay, recentStays } = useRecentStays();
  const { cabins } = useCabins();

  if (isRecentBooking || isRecentStay) <Spinner />;

  return (
    <div className={styles.styledDashboardLayout}>
      {recentBookings && recentStays && cabins && (
        <Stats
          bookings={recentBookings}
          numDays={numDays}
          cabinCount={cabins.length}
          confirmedStays={recentStays}
        />
      )}
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      {recentBookings && (
        <SalesChart bookings={recentBookings} numDays={numDays} />
      )}
    </div>
  );
}
