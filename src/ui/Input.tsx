import styles from "./Input.module.css";
import { InputHTMLAttributes } from "react";

export default function Input({
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...rest} className={styles.input} />;
}
