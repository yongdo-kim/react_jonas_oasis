import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./FileInput.module.css";

type FileInputProps = {
  register: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function FileInput({ register, ...rest }: FileInputProps) {
  return <input className={styles.file} {...rest} {...register} />;
}
