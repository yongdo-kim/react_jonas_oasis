import Button from "../../ui/Button";
import Form from "../../ui/Form";
import styles from "./CreateCabinForm.module.css";

function CreateCabinForm() {
  return (
    <Form>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Cabin name
        </label>
        <Input type="text" id="name" />
      </form>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="maxCapacity">
          Maximum capacity
        </label>
        <Input type="number" id="maxCapacity" />
      </form>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="regularPrice">
          Regular price
        </label>
        <Input type="number" id="regularPrice" />
      </form>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="discount">
          Discount
        </label>
        <Input type="number" id="discount" defaultValue={0} />
      </form>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="description">
          Description for website
        </label>
        <Textarea type="number" id="description" defaultValue="" />
      </form>

      <form className={styles.form}>
        <label className={styles.label} htmlFor="image">
          Cabin photo
        </label>
        <FileInput id="image" accept="image/*" />
      </form>

      <form className={styles.form}>
        {/* type is an HTML attribute! */}
        <Button variations="secondary" type="reset">
          Cancel
        </Button>
        <Button onClick={() => {}}>Edit cabin</Button>
      </form>
    </Form>
  );
}

export default CreateCabinForm;
