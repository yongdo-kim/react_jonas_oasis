import { Outlet } from "react-router-dom";
import Logout from "../features/authentication/Logout";
import styles from "./AppLayout.module.css";
import Header from "./Header";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Header children={<Logout />} />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
