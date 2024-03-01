import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabins } from "../../services/apiCabins";

import toast from "react-hot-toast";

import Error from "../../ui/Error";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";

//이걸 기준으로 데이터가 저장된다.
export type Inputs = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: string;
};

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<Inputs>();
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
    mutate(data);
  };

  const onError: SubmitErrorHandler<Inputs> | undefined = (errors) => {
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label={<Label text='Cabin name' htmlFor={"name"} />}
        children={
          <Input
            type='text'
            id='name'
            disabled={isPending}
            register={register("name", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Capacity should be at least 1",
              },
            })}
          />
        }
        error={
          formState.errors.name?.message && (
            <Error errorText={formState.errors.name.message} />
          )
        }
      />

      <FormRow
        label={<Label text='MaxCapacity' htmlFor={"maxCapacity"} />}
        children={
          <Input
            type='number'
            id='maxCapacity'
            disabled={isPending}
            register={register("maxCapacity", {
              required: "This field is required",
            })}
          />
        }
        error={
          formState.errors.maxCapacity?.message && (
            <Error errorText={formState.errors.maxCapacity.message} />
          )
        }
      />

      <FormRow
        label={<Label text='RegularPrice' htmlFor={"regularPrice"} />}
        children={
          <Input
            type='number'
            id='regularPrice'
            disabled={isPending}
            register={register("regularPrice", {
              required: "This field is required",
            })}
          />
        }
        error={
          formState.errors.regularPrice?.message && (
            <Error errorText={formState.errors.regularPrice.message} />
          )
        }
      />

      <FormRow
        label={<Label text='Discount' htmlFor={"discount"} />}
        children={
          <Input
            type='number'
            id='discount'
            disabled={isPending}
            register={register("discount", {
              required: "This field is required",
              validate: (value) =>
                value <= getValues().regularPrice ||
                "Discount should be less than regular price",
            })}
          />
        }
        error={
          formState.errors.discount?.message && (
            <Error errorText={formState.errors.discount.message} />
          )
        }
      />

      <FormRow
        label={<Label text='Description' htmlFor={"description"} />}
        children={
          <Textarea
            id='description'
            defaultValue=''
            disabled={isPending}
            register={register("description", {
              required: "This field is required",
            })}
          />
        }
        error={
          formState.errors.description?.message && (
            <Error errorText={formState.errors.description.message} />
          )
        }
      />

      <FormRow
        label={<Label text='Cabin photo' htmlFor={"image"} />}
        children={
          <FileInput
            id='image'
            accept='image/*'
            type='file'
            register={register("image", {
              required: "This field is required",
            })}
          />
        }
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
