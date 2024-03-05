import { ReactNode } from "react";
import styles from "./TableOperations.module.css";

type TableOperationsProps = {
  children: ReactNode;
};

export default function TableOperations({ children }: TableOperationsProps) {
  return <div className={styles.operation}>{children}</div>;
}
