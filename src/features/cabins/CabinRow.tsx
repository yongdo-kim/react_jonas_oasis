import { formatCurrency } from "../../utils/helpers";
import styles from "./CabinRow.module.css";

type CabinProp = {
  cabin: {
    created_at: string;
    description: string | null;
    discount: number | null;
    id: number;
    image: string | null;
    maxCapacity: number | null;
    name: string | null;
    regularPrice: number | null;
  };
};

export default function CabinRow({ cabin }: CabinProp) {
  return (
    <div className={styles.tableRow}>
      <img src={cabin.image ?? ""} alt='' className={styles.img} />
      <div className={styles.cabin}>{cabin.name}</div>
      <div>Fits up to {cabin.maxCapacity} guests </div>
      <div className={styles.price}>{formatCurrency(cabin.regularPrice)}</div>
      <div className={styles.discount}>{formatCurrency(cabin.discount)}</div>
      <button>DELETE</button>
    </div>
  );
}
