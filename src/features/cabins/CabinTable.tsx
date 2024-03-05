import styles from "./CabinTable.module.css";

import { useSearchParams } from "react-router-dom";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;

  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue == "all") filteredCabins = cabins;
  if (filterValue == "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  if (filterValue == "with-discount")
    filteredCabins = cabins?.filter(
      (cabin) => cabin.discount && cabin.discount > 0
    );

  return (
    <Menus>
      <div role='table' className={styles.table}>
        <div className={styles.tableHeader}>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </div>
        {filteredCabins?.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}
