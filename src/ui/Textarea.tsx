import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { Inputs } from "../features/cabins/CreateCabinForm";
import styles from "./Textarea.module.css";

type TextareaProps = {
  id: keyof Inputs;
  register: UseFormRegisterReturn<keyof Inputs>;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({ register, ...rest }: TextareaProps) {
  return <textarea className={styles.textarea} {...rest} {...register} />;
}
