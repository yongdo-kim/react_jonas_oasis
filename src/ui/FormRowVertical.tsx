import { ReactNode } from "react";
import styles from "./FormRowVertical.module.css";

type FormRowVerticalProps = {
  label?: ReactNode;
  children: ReactNode;
  error?: ReactNode;
};

export default function FormRowVertical({
  label,
  children,
  error,
}: FormRowVerticalProps) {
  return (
    <div className={styles.styledFormRow}>
      {label}
      {children}
      {error}
    </div>
  );
}
