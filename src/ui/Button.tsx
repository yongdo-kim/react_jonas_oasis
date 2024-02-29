import { ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  size?: string;
  variations?: string;
  children: ReactNode;
  style?: CSSProperties;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  size = "primary",
  variations = "medium",
  style,
  ...rest
}: ButtonProps) {
  const className = `${styles.button} ${styles[size]} ${styles[variations]}`;
  return (
    <button className={className} style={style} {...rest}>
      {children}
    </button>
  );
}
