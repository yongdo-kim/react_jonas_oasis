import styles from "./CabinTable.module.css";

import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";

export type CabinProps = {
  created_at: string;
  description: string | null;
  discount: number | null;
  id: number;
  image: string | null;
  maxCapacity: number | null;
  name: string | null;
  regularPrice: number | null;
};

export default function CabinTable() {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });
  if (isLoading) return <Spinner />;

  return (
    <>
      <div role='table' className={styles.table}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </div>
        {cabins?.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}
