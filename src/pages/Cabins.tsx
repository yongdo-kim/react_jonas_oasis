import { useEffect } from "react";
import CabinTable from "../features/cabins/CabinTable";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import Column from "../ui/Column";

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
        <p>TEST</p>
      </Row>
      <Column>
        <Row style={{ maxWidth: "80rem" }}>
          <CabinTable />
        </Row>
        <Button onClick={() => {}} children={"TEST"}></Button>
      </Column>
    </>
  );
}

export default Cabins;
