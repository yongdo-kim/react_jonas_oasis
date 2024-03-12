import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isPending: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: (user) => {
      toast.success("User Info Updated");
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
