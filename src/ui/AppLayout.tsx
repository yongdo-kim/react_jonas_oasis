import { Outlet } from "react-router-dom";
import styles from "./AppLayout.module.css";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className={styles.layout}>
      <Sidebar />

      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AppLayout;
