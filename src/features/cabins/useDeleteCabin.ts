import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabins } from "../../services/apiCabins";

export default function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isPending:isDeleting, mutate:deleteCabin } = useMutation({
    mutationFn: (id: number) => deleteCabins(id),
    onSuccess() {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
    },
    onError(error) {
      toast(error.message);
    },
  });

  return { isDeleting, deleteCabin };
}
