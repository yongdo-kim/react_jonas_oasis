import { ReactNode } from "react";
import styles from "./Box.module.css";

type BoxProps = {
  children: ReactNode;
};

export default function Box({ children }: BoxProps) {
  return <div className={styles.box}>{children}</div>;
}
