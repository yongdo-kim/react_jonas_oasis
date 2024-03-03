import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";

import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";

import { createCabins, editCabins } from "../../services/apiCabins";
import Error from "../../ui/Error";
import FileInput from "../../ui/FileInput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";
import { CabinProp } from "./CabinRow";

//이걸 기준으로 데이터가 저장된다.
export type Inputs = {
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  image: FileList;
  editImage: string;
};

function CreateCabinForm({ cabin }: { cabin?: CabinProp }) {
  const canEdit = cabin != undefined;

  //form
  const { register, handleSubmit, reset, getValues, formState } =
    useForm<Inputs>({
      defaultValues: canEdit
        ? {
            name: cabin.name!,
            maxCapacity: cabin.maxCapacity!,
            regularPrice: cabin.regularPrice!,
            discount: cabin.discount!,
            description: cabin.description!,
            editImage: cabin.image!,
            image: undefined,
          }
        : undefined,
    });

  //query
  const queryClient = useQueryClient();

  //create mutate
  const { mutate: createCabin, isPending: isCreating } = useMutation({
    mutationFn: createCabins,
    onSuccess: () => {
      toast.success("New cabin successfullt created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); //useForm 초기화
    },
    onError: (err) => toast.error(err.message),
  });

  //edit mutate
  const { mutate: editCabin, isPending: isEditing } = useMutation({
    mutationFn: editCabins,
    onSuccess: () => {
      toast.success("New cabin successfullt edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset(); //useForm 초기화
    },
    onError: (err) => toast.error(err.message),
  });

  //submit 시점 이후 여기서 분기처리
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (canEdit) {
      cabin.name = data.name;
      cabin.maxCapacity = data.maxCapacity;
      cabin.regularPrice = data.regularPrice;
      cabin.discount = data.discount;
      cabin.description = data.description;
      cabin.image = data.editImage; //여기는 잠시 패스

      editCabin({ cabin });
    } else createCabin({ ...data });
  };

  const onError: SubmitErrorHandler<Inputs> | undefined = (errors) => {
    console.log(errors);
  };

  const isWorking = isCreating || isEditing;

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow
        label={<Label text='Cabin name' htmlFor={"name"} />}
        children={
          <Input
            type='text'
            id='name'
            disabled={isWorking}
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
            disabled={isWorking}
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
            disabled={isWorking}
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
            disabled={isWorking}
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
            disabled={isWorking}
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
              required: canEdit ? false : "This field is required",
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
            <Button disabled={isWorking} variations='secondary' size='medium'>
              {canEdit ? "Edit cabin" : "Add cabin"}
            </Button>
          </>
        }
      />
    </Form>
  );
}

export default CreateCabinForm;
