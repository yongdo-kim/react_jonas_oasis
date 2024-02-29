import styles from "./Input.module.css";

type InputProps = {
  type: string;
  id: string;
  defaultValue?: number;
};

export default function Input({ type, id, defaultValue }: InputProps) {
  return (
    <input
      id={id}
      className={styles.input}
      type={type}
      defaultValue={defaultValue}
    />
  );
}
