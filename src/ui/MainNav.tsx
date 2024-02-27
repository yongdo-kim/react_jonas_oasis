import { NavLink } from "react-router-dom";
import styles from "./MainNav.module.css";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
} from "react-icons/hi2";

export default function MainNav() {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="/dashboard" className={styles.nav}>
            <HiOutlineHome />
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookings" className={styles.nav}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cabins" className={styles.nav}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" className={styles.nav}>
            <HiOutlineCalendarDays />
            <span>Users</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" className={styles.nav}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
