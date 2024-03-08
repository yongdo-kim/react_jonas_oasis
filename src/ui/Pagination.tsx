import styles from "./Pagination.module.css";

export default function Pagination() {
  return (
    <div className={styles.pagination}>
      <p className={styles.active}>
        Showing <span>1</span> to <span>10</span> of <span>23</span> results
      </p>
    </div>
  );
}
