import { useMoveBack } from "../../hooks/useMoveBack";
import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import HeadingGroup from "../../ui/HeadingGroup";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import Tag from "../../ui/Tag";
import BookingDataBox from "./BookingDataBox";
import useBooking from "./useBooking";

function BookingDetail() {
  const { isLoading, booking } = useBooking();

  const status = "checked-in";

  const moveBack = useMoveBack();

  if (isLoading) return <Spinner />;

  return (
    <>
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "80rem",
        }}
      >
        <HeadingGroup>
          <Heading style='h1'>Booking #X</Heading>
          <Tag status={booking?.status!}>{status.replace("-", " ")}</Tag>
        </HeadingGroup>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox
        booking={booking!}
        cabin={booking?.cabins!}
        guest={booking?.guests!}
      />

      <ButtonGroup>
        <Button variations='secondary' onClick={moveBack}>
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default BookingDetail;
