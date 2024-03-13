import styles from "./DashboardLayout.module.css";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";

export default function DashboardLayout() {
  const { isRecentBooking, recentBookings } = useRecentBookings();
  const { isRecentStay, recentStays } = useRecentStays();

  if (isRecentBooking || isRecentStay) <Spinner />;

  console.log("recentBookings", recentBookings);
  console.log("recentStays", recentStays);

  return (
    <div className={styles.styledDashboardLayout}>
      {recentBookings && recentStays && (
        <Stats
          bookings={recentBookings}
          numDays={0}
          cabinCount={0}
          confirmedStays={recentStays}
        />
      )}
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </div>
  );
}
