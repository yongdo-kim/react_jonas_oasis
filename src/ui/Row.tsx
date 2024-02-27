import { CSSProperties, ReactNode } from "react";
import styles from "./Row.module.css";
type RowProps = {
  style?: CSSProperties;
  children: ReactNode;
};

export default function Row({ children, style }: RowProps) {
  const className = `${styles.row}`;
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
