import { ReactNode } from "react";
import styles from "./LoginLayout.module.css";

type LoginLayoutProps = {
  children: ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
  return <main className={styles.layout}>{children}</main>;
}
