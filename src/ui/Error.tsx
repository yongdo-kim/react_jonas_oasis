import styles from "./Error.module.css";

type ErrorProps = {
  errorText: string;
};

export default function Error({ errorText }: ErrorProps) {
  return <span className={styles.error}>{errorText}</span>;
}
