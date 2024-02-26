import { ReactNode } from "react";
import styles from "./Row.module.css";
type Props = {
  children: ReactNode;
};

export default function Column({ children }: Props) {
  return <div className={styles.row}>{children}</div>;
}
