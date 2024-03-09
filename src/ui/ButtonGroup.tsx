import { ReactNode } from "react";

import styles from "./ButtonGroup.module.css";

type ButtonGroupProps = {
  children: ReactNode;
};

export default function ButtonGroup({ children }: ButtonGroupProps) {
  return <div className={styles.buttonGroup}>{children}</div>;
}
