import { useState } from "react";
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";
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
  // const { isCreating, createCabin } = useCreateCabin();

  // function handleDuplicate() {
  //   createCabin({
  //     name: `Copy of ${cabin.name}`,
  //     maxCapacity: cabin.maxCapacity!,
  //     regularPrice: cabin.regularPrice!,
  //     discount: cabin.discount!,
  //     description: cabin.description!,
  //     image: undefined,
  //     editImage: cabin.image ?? "",
  //   });
  // }

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
          <button>
            <HiSquare2Stack />
          </button>
          <button onClick={() => setShowForm(!showForm)}>
            <HiPencil />
          </button>
          <button disabled={isDeleting} onClick={() => deleteCabin(cabin.id)}>
            <HiTrash />
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabin={cabin} />}
    </>
  ) : (
    <div></div>
  );
}
