import { HiOutlineUser } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import ButtonIcon from "./ButtonIcon";
import DarkMode from "./DarkModeToggle";
import styles from "./HeaderMenu.module.css";

function HeaderMenu() {
  const navigate = useNavigate();

  return (
    <ul className={styles.styledHeaderMenu}>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUser />
        </ButtonIcon>
      </li>
      <li>
        <DarkMode />
      </li>
      <li>
        <Logout />
      </li>
    </ul>
  );
}

export default HeaderMenu;
