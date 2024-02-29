import { TextareaHTMLAttributes } from "react";
import styles from "./Textarea.module.css";

export default function Textarea({
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={styles.textarea} {...rest} />;
}
