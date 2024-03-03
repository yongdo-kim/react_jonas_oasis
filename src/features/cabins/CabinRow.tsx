import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import styles from "./CabinRow.module.css";
import CreateCabinForm from "./CreateCabinForm";
import useDeleteCabin from "./useDeleteCabin";

export type CabinProp = {
  created_at: string;
  description: string | null;
  discount: number | null;
  id: number;
  image: string | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
};

export default function CabinRow({ cabin }: { cabin: CabinProp }) {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();
  return cabin != undefined ? (
    <>
      <div className={styles.tableRow}>
        <img src={cabin.image ?? ""} alt='' className={styles.img} />
        <div className={styles.cabin}>{cabin?.name}</div>
        <div>Fits up to {cabin.maxCapacity} guests </div>
        <div className={styles.price}>{formatCurrency(cabin.regularPrice)}</div>
        {cabin.discount ? (
          <div className={styles.discount}>
            {formatCurrency(cabin.discount)}
          </div>
        ) : (
          <span>&mdash;</span>
        )}
        <div>
          <button onClick={() => setShowForm(!showForm)}>EDIT</button>
          <button disabled={isDeleting} onClick={() => deleteCabin(cabin.id)}>
            DELETE
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabin={cabin} />}
    </>
  ) : (
    <div></div>
  );
}
