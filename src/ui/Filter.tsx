import { useSearchParams } from "react-router-dom";
import styles from "./Filter.module.css";

type FilterProps = {
  filterField: string;
  options: { value: string; label: string }[];
};

export default function Filter({ filterField, options }: FilterProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField);

  function handleClick(value: string) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className={styles.filter}>
      {options.map((option) => (
        <button
          key={option.value}
          className={`${styles.button} ${
            option.value === currentFilter ? styles.active : ""
          }`}
          disabled={option.value === currentFilter}
          onClick={() => handleClick(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
