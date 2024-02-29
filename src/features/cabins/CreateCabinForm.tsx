import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";

import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";
import FileInput from "../../ui/Fileinput";

export type Inputs = {
  name: string;
  maxCapacity: string;
  regularPrice: string;
  discount: number;
};

function CreateCabinForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label={<Label text="Cabin name" htmlFor={"name"} />}
        children={<Input type="text" id="name" {...register("name")} />}
        error={undefined}
      />

      <FormRow
        label={<Label text="MaxCapacity" htmlFor={"maxCapacity"} />}
        children={
          <Input type="number" id="maxCapacity" {...register("maxCapacity")} />
        }
        error={undefined}
      />

      <FormRow
        label={<Label text="RegularPrice" htmlFor={"regularPrice"} />}
        children={
          <Input
            type="number"
            id="regularPrice"
            {...register("regularPrice")}
          />
        }
        error={undefined}
      />

      <FormRow
        label={<Label text="Discount" htmlFor={"discount"} />}
        children={
          <Input type="number" id="discount" {...register("discount")} />
        }
        error={undefined}
      />

      <FormRow
        label={<Label text="Description" htmlFor={"description"} />}
        children={<Textarea id="description" defaultValue="" />}
        error={undefined}
      />

      <FormRow
        label={<Label text="Cabin photo" htmlFor={"image"} />}
        children={<FileInput id="image" accept="image/*" />}
        error={undefined}
      />

      <FormRow
        children={
          <>
            <Button
              onClick={() => {}}
              variations="secondary"
              size="medium"
              type="reset"
            >
              Cancel
            </Button>
            <Button onClick={() => {}} variations="secondary" size="medium">
              Edit cabin
            </Button>
          </>
        }
      />
    </Form>
  );
}

export default CreateCabinForm;
