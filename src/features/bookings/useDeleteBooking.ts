import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteBooking } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deletebook, isPending: isDeleting } = useMutation({
    mutationFn: (bookingId: string) => deleteBooking({ id: bookingId }),

    onSuccess: () => {
      toast.success(`Booking successfully deleted`);
      queryClient.invalidateQueries();
    },

    onError: () => toast.error("There was an error while checking out"),
  });

  return { deletebook, isDeleting };
}
