import { ReactNode } from "react";
import styles from "./HeadingGroup.module.css";

type HeadingGroupProps = {
  children: ReactNode;
};

export default function Heading({ children }: HeadingGroupProps) {
  return <div className={styles.headingGroup}>{children}</div>;
}
