import { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  size?: string;
  variations?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  size,
  variations,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${size ? styles[size] : "primary"} ${
    variations ? styles[variations] : "medium"
  }`;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
