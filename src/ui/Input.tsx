import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Inputs } from "../features/cabins/CreateCabinForm";
import styles from "./Input.module.css";

type InputProps = {
  register: UseFormRegisterReturn;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({register, ...rest }: InputProps) {
  return <input {...rest} className={styles.input} {...register} />;
}
