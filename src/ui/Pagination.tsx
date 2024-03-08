import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import styles from "./Pagination.module.css";

export default function Pagination() {
  function nextPage() {}

  function previousPage() {}

  return (
    <div className={styles.pagination}>
      <p className={styles.active}>
        Showing <span>1</span> to <span>10</span> of <span>23</span> results
      </p>

      <div className={styles.buttons}>
        <button className={styles.paginationButton}>
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button className={styles.paginationButton}>
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
