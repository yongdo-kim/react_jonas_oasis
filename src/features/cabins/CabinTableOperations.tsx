import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

export default function CabinTableOperations() {
  return (
    <TableOperations
      children={
        <>
          <Filter
            filterField='discount'
            options={[
              { value: "all", label: "All" },
              { value: "no-discount", label: "No discount" },
              { value: "with-discount", label: "With discount" },
            ]}
          />
          <SortBy
            options={[
              { value: "startDate-desc", label: "Sort by date (recent first)" },
              { value: "startDate-asc", label: "Sort by date (earlier first)" },
              {
                value: "totalPrice-desc",
                label: "Sort by amount (high first)",
              },
              { value: "totalPrice-asc", label: "Sort by amount (low first)" },
            ]}
          />
        </>
      }
    />
  );
}
