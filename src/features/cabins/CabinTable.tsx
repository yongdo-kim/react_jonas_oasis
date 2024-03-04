import styles from "./CabinTable.module.css";

import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import useCabins from "./useCabins";

export default function CabinTable() {
  const { isLoading, cabins } = useCabins();
  if (isLoading) return <Spinner />;

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
        {cabins?.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}
