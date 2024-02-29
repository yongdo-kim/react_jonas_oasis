import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";

import toast from "react-hot-toast";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";

export type Inputs = {
  name: string;
  maxCapacity: string;
  regularPrice: string;
  discount: number;
};

function CreateCabinForm() {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("New cabin successfullt created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); //useForm 초기화
    },
    onError: (err) => toast.success(err.message),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //따로 파라미터가 없어도 넣은것으로 인식.
    console.log("onSubmit", data);
    mutate(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label={<Label text='Cabin name' htmlFor={"name"} />}
        children={<Input type='text' id='name' register={register} />}
        error={undefined}
      />

      <FormRow
        label={<Label text='MaxCapacity' htmlFor={"maxCapacity"} />}
        children={<Input type='number' id='maxCapacity' register={register} />}
        error={undefined}
      />

      <FormRow
        label={<Label text='RegularPrice' htmlFor={"regularPrice"} />}
        children={<Input type='number' id='regularPrice' register={register} />}
        error={undefined}
      />

      <FormRow
        label={<Label text='Discount' htmlFor={"discount"} />}
        children={<Input type='number' id='discount' register={register} />}
        error={undefined}
      />

      <FormRow
        label={<Label text='Description' htmlFor={"description"} />}
        children={<Textarea id='description' defaultValue='' />}
        error={undefined}
      />

      <FormRow
        label={<Label text='Cabin photo' htmlFor={"image"} />}
        children={<FileInput id='image' accept='image/*' />}
        error={undefined}
      />

      <FormRow
        children={
          <>
            <Button variations='secondary' size='medium' type='reset'>
              Cancel
            </Button>
            <Button disabled={isPending} variations='secondary' size='medium'>
              Edit cabin
            </Button>
          </>
        }
      />
    </Form>
  );
}

export default CreateCabinForm;
