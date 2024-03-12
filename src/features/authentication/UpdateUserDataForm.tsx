import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useForm } from "react-hook-form";
import useUpdateUser from "./useUpdateUser";
import { useUser } from "./useUser";

export type UpdateUserInputs = {
  email: string;
  fullName: string;
  avatar: FileList;
};

function UpdateUserDataForm() {
  const { user } = useUser();

  const { register, handleSubmit, getValues, reset } =
    useForm<UpdateUserInputs>();
  const { updateUser, isUpdating } = useUpdateUser();
  function onSubmit() {
    updateUser(
      { fullName: getValues().fullName, avatar: getValues().avatar },
      {
        onSuccess: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Email address'>
        <Input
          value={user?.email}
          disabled
          register={register("email")}
          id='email'
        />
      </FormRow>
      <FormRow label='Full name'>
        <Input
          type='text'
          register={register("fullName")}
          id='fullName'
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label='Avatar image'>
        <FileInput
          id='avatar'
          type='file'
          accept='image/*'
          disabled={isUpdating}
          register={register("avatar")}
        />
      </FormRow>
      <FormRow>
        <Button
          onClick={() => reset()}
          variations='secondary'
          disabled={isUpdating}
        >
          Cancel
        </Button>
        <Button>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
