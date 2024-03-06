import { CSSProperties, SelectHTMLAttributes } from "react";
import styles from "./Select.module.css";

type SelectProps = {
  value?: CSSProperties;
  options: { value: string; label: string }[];
};
export default function Select({
  options,
  ...rest
}: SelectProps & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={styles.select} {...rest}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
