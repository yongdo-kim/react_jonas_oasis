import Button from "../../ui/Button";
import FileInput from "../../ui/Fileinput";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Textarea from "../../ui/Textarea";

function CreateCabinForm() {
  return (
    <Form>
      <FormRow
        label={<Label text="Cabin name" htmlFor={"name"} />}
        children={<Input type="text" id="name" />}
        error={undefined}
      />

      <FormRow
        label={<Label text="MaxCapacity" htmlFor={"maxCapacity"} />}
        children={<Input type="number" id="maxCapacity" />}
        error={undefined}
      />

      <FormRow
        label={<Label text="RegularPrice" htmlFor={"regularPrice"} />}
        children={<Input type="number" id="regularPrice" />}
        error={undefined}
      />

      <FormRow
        label={<Label text="Discount" htmlFor={"discount"} />}
        children={<Input type="number" id="discount" />}
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
            <Button onClick={() => {}} variations="secondary" size="medium">
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
