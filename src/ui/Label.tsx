import styles from "./Label.module.css";

type LabelProps = {
  text: string;
  htmlFor?: string;
};
export default function Label({ text, htmlFor }: LabelProps) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
}
