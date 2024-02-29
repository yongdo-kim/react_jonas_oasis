import { UseFormRegister } from "react-hook-form";
import styles from "./Input.module.css";
import { Inputs } from "../features/cabins/CreateCabinForm";

type InputProps = {
  type: string;
  id: keyof Inputs;
  defaultValue?: number;
  register: UseFormRegister<Inputs>;
};

export default function Input({
  type,
  id,
  defaultValue,
  register,
}: InputProps) {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      defaultValue={defaultValue}
      {...register(id)}
    />
  );
}
