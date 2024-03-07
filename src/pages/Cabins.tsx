import { useEffect } from "react";
import CabinTable from "../features/cabins/CabinTable";
import { getCabins } from "../services/apiCabins";
import Column from "../ui/Column";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "80rem",
        }}
      >
        <Heading style="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Column>
        <Row style={{ maxWidth: "80rem" }}>
          <CabinTable />
        </Row>
        <AddCabin />
      </Column>
    </>
  );
}

export default Cabins;
