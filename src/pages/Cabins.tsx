import { useEffect, useState } from "react";
import CabinTable from "../features/cabins/CabinTable";
import { getCabins } from "../services/apiCabins";
import Button from "../ui/Button";
import Column from "../ui/Column";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

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
        <Heading style='h1'>All cabins</Heading>
        <p>TEST</p>
      </Row>
      <Column>
        <Row style={{ maxWidth: "80rem" }}>
          <CabinTable />
        </Row>
        <Button
          variations='primary'
          size='medium'
          style={{ width: "80rem" }}
          onClick={() => setShowForm(!showForm)}
          children={"Add new cabin"}
        ></Button>
        {showForm && <CreateCabinForm />}
      </Column>
    </>
  );
}

export default Cabins;
