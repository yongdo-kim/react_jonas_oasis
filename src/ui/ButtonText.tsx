import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonText.module.css";

type ButtonTextProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonText({ children, ...rest }: ButtonTextProps) {
  return (
    <button className={styles.buttonText} {...rest}>
      {children}
    </button>
  );
}
