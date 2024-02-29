import { ReactNode } from "react";
import styles from "./FormRow.module.css";

type FormRowProps = {
  label?: ReactNode;
  children: ReactNode;
  error?: ReactNode;
};

export default function FormRow({ label, children, error }: FormRowProps) {
  return (
    <div className={styles.row}>
      {label}
      {children}
      {error}
    </div>
  );
}
