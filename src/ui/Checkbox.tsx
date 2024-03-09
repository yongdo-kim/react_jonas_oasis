import { ReactNode } from "react";
import styles from "./Checkbox.module.css";

type CheckBoxProps = {
  id: string;
  onChange: () => void;
  checked: boolean;
  disabled: boolean;
  children: ReactNode;
};

function Checkbox({
  checked,
  onChange,
  disabled = false,
  id,
  children,
}: CheckBoxProps) {
  return (
    <div className={styles.styledCheckbox}>
      <input
        type='checkbox'
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
