import { ImgHTMLAttributes } from "react";
import styles from "./Flag.module.css";

export default function Flag({ ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  return <img className={styles.img} {...rest} />;
}
