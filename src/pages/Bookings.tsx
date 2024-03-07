import BookingTable from "../features/bookings/BookingTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Bookings() {
  return (
    <>
      <Row>
        <Heading style='h1'>All bookings</Heading>
        <p>TEST</p>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
