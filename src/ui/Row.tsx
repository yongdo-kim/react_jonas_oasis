import { ReactNode } from "react";
import styles from './Row.module.css'
type RowProps = {
  children: ReactNode;
};

export default function Row({ children }: RowProps) {
  return <div className={styles.row}>{children}</div>;
}


