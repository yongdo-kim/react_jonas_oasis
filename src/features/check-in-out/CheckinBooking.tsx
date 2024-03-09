import BookingDataBox from "../bookings/BookingDataBox";

import Button from "../../ui/Button";
import ButtonGroup from "../../ui/ButtonGroup";
import ButtonText from "../../ui/ButtonText";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import { useEffect, useState } from "react";
import { useMoveBack } from "../../hooks/useMoveBack";
import Box from "../../ui/Box";
import Checkbox from "../../ui/Checkbox";
import Spinner from "../../ui/Spinner";
import useBooking from "../bookings/useBooking";
import useChecking from "../bookings/useChecking";
import useSettings from "../settings/useSettings";

function CheckinBooking() {
  const [confirmPaid, setConfirmPaid] = useState<boolean>(false);
  const [addBreakfast, setAddBreakfast] = useState<boolean>(false);

  const { booking, isLoading } = useBooking();
  const { settings, isLoading: isLoadingSettings } = useSettings();

  useEffect(() => {
    setConfirmPaid(booking?.isPaid ?? false);
  }, [booking?.isPaid]);

  const moveBack = useMoveBack();
  const { checkin, isCheckingIn } = useChecking();

  function handleCheckin() {
    if (!confirmPaid) return;

    if (addBreakfast) {
      checkin({
        bookingId: booking!.id.toString(),
        breakfast: {
          hasBreakfast: true,
          extrasPrice: optionalBreakfastPrice,
          totalPrice: (booking?.totalPrice ?? 0) + optionalBreakfastPrice,
        },
      });
    }
    if (confirmPaid) {
      checkin({ bookingId: booking!.id.toString() });
    }
  }

  if (isLoading || isLoadingSettings) return <Spinner />;
  if (!booking) return <>Not Founded Booking ID</>;
  if (!settings) return <>Not Founded Settings</>;

  const optionalBreakfastPrice =
    (settings.breakfastPrice ?? 0) *
    (booking.numNights ?? 0) *
    (booking.numGuests ?? 0);

  return (
    <>
      <Row>
        <Heading style='h1'>Check in booking #{booking.id}</Heading>
        <ButtonText onClick={moveBack}>&larr; Back</ButtonText>
      </Row>

      <BookingDataBox
        booking={booking}
        cabin={booking.cabins!}
        guest={booking.guests!}
      />

      {!booking.hasBreakfast && (
        <Box
          children={
            <Checkbox
              children={`Want to add breakfast fot ${optionalBreakfastPrice}?`}
              id={"breakfast"}
              onChange={() => {
                setAddBreakfast((add) => !add);
                setConfirmPaid(false);
              }}
              checked={addBreakfast}
              disabled={isCheckingIn}
            />
          }
        />
      )}

      <Box
        children={
          <Checkbox
            children={` I confirm that ${booking.guests?.fullName} has paid the total amount`}
            id={"confirm"}
            onChange={() => {
              setConfirmPaid(!confirmPaid);
            }}
            checked={confirmPaid}
            disabled={isCheckingIn}
          />
        }
      />

      <ButtonGroup>
        <Button onClick={handleCheckin} disabled={!confirmPaid}>
          Check in booking #{booking.id}
        </Button>
        <Button
          variations='secondary'
          onClick={moveBack}
          disabled={isCheckingIn}
        >
          Back
        </Button>
      </ButtonGroup>
    </>
  );
}

export default CheckinBooking;
