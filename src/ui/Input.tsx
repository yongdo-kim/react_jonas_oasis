import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import styles from "./Input.module.css";

type InputProps = {
  register: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({register, ...rest }: InputProps) {
  return <input {...rest} className={styles.input} {...register} />;
}
