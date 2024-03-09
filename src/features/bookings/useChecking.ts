import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { updateBooking } from "../../services/apiBookings";

export type UpdateCheckingProps = {
  status: string;
  isPaid: boolean;
};

export default function useChecking() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: checkin, isPending: isCheckingIn } = useMutation({
    mutationFn: ({
      bookingId,
      breakfast,
    }: {
      bookingId: string;
      breakfast?: {
        hasBreakfast: boolean;
        extrasPrice: number;
        totalPrice: number;
      };
    }) =>
      updateBooking({
        id: bookingId,
        obj: { status: "checked-in", isPaid: true, ...breakfast },
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfullt checked in`);
      queryClient.invalidateQueries();
      navigate("/");
    },
  });
  return { checkin, isCheckingIn };
}
