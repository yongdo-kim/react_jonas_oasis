import { useEffect } from "react";
import CabinTable from "../features/cabins/CabinTable";
import { getCabins } from "../services/apiCabins";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);

  return (
    <>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <Heading style='h1'>All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <CabinTable />
      </Row>
    </>
  );
}

export default Cabins;
