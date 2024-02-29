import styles from "./Fileinput.module.css";

type FileInputProps = {
  id: string;
  accept: string;
};

export default function FileInput({ id, accept }: FileInputProps) {
  return <input className={styles.file} type="file" id={id} accept={accept} />;
}
