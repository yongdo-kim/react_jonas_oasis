import { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children?: ReactNode;
};

export default function Header({ children }: HeaderProps) {
  return <div className={styles.container}>{children}</div>;
}
