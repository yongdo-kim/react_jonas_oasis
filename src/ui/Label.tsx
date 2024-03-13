import { LabelHTMLAttributes, ReactNode } from "react";
import styles from "./Label.module.css";

type LabelProps = {
  children: ReactNode;
} & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label({ children, ...rest }: LabelProps) {
  return (
    <label className={styles.label} {...rest}>
      {children}
    </label>
  );
}
