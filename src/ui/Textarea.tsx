import styles from "./Textarea.module.css";

type TextareaProp = {
  id: string;
  defaultValue: string;
};
export default function Textarea({ id, defaultValue }: TextareaProp) {
  return (
    <textarea className={styles.textarea} id={id} defaultValue={defaultValue} />
  );
}
