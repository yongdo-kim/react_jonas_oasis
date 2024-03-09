import { ReactNode } from "react";
import styles from "./DataItem.module.css";

type DataItemProps = {
  children: ReactNode;
  label: string;
  icon: ReactNode;
};

function DataItem({ icon, label, children }: DataItemProps) {
  return (
    <div className={styles.styledDataItem}>
      <div className={styles.label}>
        {icon}
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
}

export default DataItem;
