import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Inputs } from "../features/cabins/CreateCabinForm";
import styles from "./Input.module.css";

type InputProps = {
  id: keyof Inputs;

  register: UseFormRegisterReturn<keyof Inputs>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, register, ...rest }: InputProps) {
  return <input {...rest} className={styles.input} {...register} />;
}
