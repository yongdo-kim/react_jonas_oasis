import { ReactNode } from "react";
import styles from "./Tag.module.css";

type TagProps = {
  children: ReactNode;
  
};

export default function Tag({ children }: TagProps) {
  return <div className={styles.tag}>{children}</div>;
}
