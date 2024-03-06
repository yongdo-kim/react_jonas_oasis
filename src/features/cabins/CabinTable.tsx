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

  //url의 쿼리파마티러 기준으로 filter를 진행
  const filterValue = searchParams.get("discount") || "all";
  let filteredCabins;
  if (filterValue == "all") filteredCabins = cabins;
  if (filterValue == "no-discount")
    filteredCabins = cabins?.filter((cabin) => cabin.discount === 0);
  if (filterValue == "with-discount")
    filteredCabins = cabins?.filter(
      (cabin) => cabin.discount && cabin.discount > 0
    );

  //url의 쿼리파마티러 기준으로 sortBy를 진행

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const modifier = direction === "asc" ? 1 : -1;
  let sortedCabins;
  if (field == "startDate") {
    sortedCabins = filteredCabins?.sort(
      (a, b) =>
        (new Date(a.created_at).getTime() - new Date(b.created_at).getTime()) *
        modifier
    );
  }

  if (field == "totalPrice") {
    sortedCabins = filteredCabins?.sort(
      (a, b) => (a.regularPrice! - b.regularPrice!) * modifier
    );
  }

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
        {sortedCabins?.map((cabin) => (
          <CabinRow cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </Menus>
  );
}
