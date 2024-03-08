import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import styles from "./Pagination.module.css";

export const PAGE_SIZE = 10;

export default function Pagination({ count }: { count: number }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  // if (pageCount <= 1) return null;

  return (
    <div className={styles.pagination}>
      <p className={styles.active}>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{" "}
        <span>{currentPage * PAGE_SIZE}</span> of <span>{count}</span> results
      </p>

      <div className={styles.buttons}>
        <button
          disabled={currentPage === 1}
          className={styles.paginationButton}
          onClick={previousPage}
        >
          <HiChevronLeft />
          <span>Previous</span>
        </button>
        <button
          disabled={currentPage === pageCount}
          className={styles.paginationButton}
          onClick={nextPage}
        >
          <span>Next</span>
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}
