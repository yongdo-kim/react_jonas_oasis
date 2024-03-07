import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField='status'
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked out" },
          { value: "checked-in", label: "Checked in" },
          { value: "unconfirmed", label: "Unconfirmed" },
        ]}
      />

      <SortBy
        options={[
          { value: "name-asc", label: "Sort by name(A-Z)" },
          { value: "name-desc", label: "Sort by name(Z-A)" },
          {
            value: "regularPrice-asc",
            label: "Sort by price(low first)",
          },
          {
            value: "regularPrice-desc",
            label: "Sort by price(high first)",
          },
          { value: "maxCapacity-asc", label: "Sort by price(low first)" },
          { value: "maxCapacity-desc", label: "Sort by price(high first)" },
        ]}
      />
    </TableOperations>
  );
}

export default BookingTableOperations;
