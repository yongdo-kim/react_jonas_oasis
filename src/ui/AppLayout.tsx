import { Outlet } from "react-router-dom";
import UserAvatar from "../features/authentication/UserAvatar";
import styles from "./AppLayout.module.css";
import Header from "./Header";
import HeaderMenu from "./HeaderMenu";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Header
        children={
          <Header>
            <UserAvatar />
            <HeaderMenu />
          </Header>
        }
      />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
