import { ReactNode } from "react";
import styles from "./Heading.module.css";

type HeadingProps = {
  style: string;
  children: ReactNode;
};

export default function Heading({ style, children }: HeadingProps) {
  return <div className={styles[style]}>{children}</div>;
}
