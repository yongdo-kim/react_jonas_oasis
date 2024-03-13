import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import { BookingProps } from "../bookings/BookingRow";
import { RecentBookingsProps } from "./useRecentBookings";

type StatsProps = {
  bookings: RecentBookingsProps[];
  confirmedStays: BookingProps[];
  numDays: number;
  cabinCount: number;
};

function Stats({ bookings, confirmedStays, numDays, cabinCount }: StatsProps) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce(
    (acc: number, cur: RecentBookingsProps) => acc + (cur.totalPrice ?? 0),
    0
  );

  // 3.
  const checkins = confirmedStays.length;

  // 4.
  const occupation =
    confirmedStays.reduce(
      (acc: number, cur: BookingProps) => acc + (cur.numNights ?? 0),
      0
    ) /
    (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings.toString()}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins.toString()}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;
