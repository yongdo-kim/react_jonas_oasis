import { ReactNode } from "react";
import styles from "./Form.module.css";

type FormProp = {
  children: ReactNode;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
};

export default function Form({ children, onSubmit }: FormProp) {
  return (
    <form role="form" className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
