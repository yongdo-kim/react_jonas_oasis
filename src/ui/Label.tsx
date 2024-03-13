import { LabelHTMLAttributes } from "react";
import styles from "./Label.module.css";

type LabelProps = {
  text: string;
} & LabelHTMLAttributes<HTMLLabelElement>;
export default function Label({ text, ...rest }: LabelProps) {
  return (
    <label className={styles.label} {...rest}>
      {text}
    </label>
  );
}
