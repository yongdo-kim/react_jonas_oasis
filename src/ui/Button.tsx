import { CSSProperties, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  size?: string;
  variations?: string;
  children: ReactNode;
  style?: CSSProperties;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  children,
  size = "primary",
  variations = "medium",
  style,
  onClick,
}: ButtonProps) {
  const className = `${styles.button} ${styles[size]} ${styles[variations]}`;
  return (
    <button onClick={onClick} className={className} style={style}>
      {children}
    </button>
  );
}
