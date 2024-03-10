import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./ButtonIcon.module.css";

type ButtonIconProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonIcon({ children, ...rest }: ButtonIconProps) {
  return (
    <button className={styles.buttonIcon} {...rest}>
      {children}
    </button>
  );
}
