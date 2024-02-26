import { NavLink } from "react-router-dom";

export default function MainNav() {
  return (
    <nav>
      <li>
        <NavLink to='/dashboard'>Home</NavLink>
      </li>
      <li>
        <NavLink to='/bookings'>Bookings</NavLink>
      </li>
    </nav>
  );
}
