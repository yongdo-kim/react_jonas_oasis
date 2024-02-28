import { ReactNode } from "react";
import styles from "./Form.module.css";

type FormProp = {
  children: ReactNode;
};

export default function Form({ children }: FormProp) {
  return (
    <div role="form" className={styles.form}>
      {children}
    </div>
  );
}
