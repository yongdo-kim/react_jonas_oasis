import { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
  status: string;
  children: ReactNode;
};

export default function Tag({ children, status }: TagProps) {
  const className = `${styles.tag} ${styles[status]}`;
  return <div className={className}>{children}</div>;
}
