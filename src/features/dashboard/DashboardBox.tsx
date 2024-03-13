import { ReactNode } from "react";
import styles from "./DashboardBox.module.css";

type DashboardBox = {
  children: ReactNode;
};

export default function DashboardBox({ children }: DashboardBox) {
  return <div className={styles.dashboardBox}>{children}</div>;
}
