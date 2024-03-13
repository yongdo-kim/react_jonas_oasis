import { ReactNode } from "react";
import styles from "./DashboardLayout.module.css";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

type DashboardLayoutProps = {
  children: ReactNode;
};

export default function DashboardLayout() {
  const { isRecentBooking, recentBookings } = useRecentBookings();
  const { isRecentStay, recentStays } = useRecentStays();

  if (isRecentBooking || isRecentStay) <Spinner />;

  console.log("recentBookings", recentStays);
  console.log("recentStays", recentStays);

  return (
    <div className={styles.styledDashboardLayout}>
      <div>Statistics</div>
      <div>Today's activity</div>
      <div>Chart stay durations</div>
      <div>Chart sales</div>
    </div>
  );
}
