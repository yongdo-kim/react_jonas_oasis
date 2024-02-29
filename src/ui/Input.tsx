import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../features/cabins/CreateCabinForm";
import styles from "./Input.module.css";

type InputProps = {
  id: keyof Inputs;
  register: UseFormRegister<Inputs>;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ id, register, ...rest }: InputProps) {
  return <input {...rest} className={styles.input} {...register(id)} />;
}
