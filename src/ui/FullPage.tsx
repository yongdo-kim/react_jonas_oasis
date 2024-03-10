import { ReactNode } from "react";
import styles from "./FullPage.module.css";

type FullPageProps = {
  children: ReactNode;
};

export default function FullPage({ children }: FullPageProps) {
  return <div className={styles.fullPage}>{children}</div>;
}
