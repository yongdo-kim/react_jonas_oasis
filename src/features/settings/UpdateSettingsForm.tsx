import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import useUpdateSettings from "./useEditSettings";
import useSettings from "./useSettings";

export type SettingProps = {
  breakfastPrice: number | null;
  created_at: string;
  id: number;
  maxBookingLength: number | null;
  maxGuestsPerBooking: number | null;
  minBookingLength: number | null;
};

export type SettingInputs = {
  minNights: number;
  maxNights: number;
  maxGuests: number;
  breakfastPrice: number;
};

function UpdateSettingsForm() {
  const { isLoading, settings } = useSettings();
  const { register, handleSubmit } = useForm<SettingInputs>();
  const { isUpdating, updateSetting } = useUpdateSettings();

  const onSubmit: SubmitHandler<SettingInputs> = (data) => {
    if (settings) {
      const updatedSettings = {
        ...settings,
        minBookingLength: data.minNights,
        maxBookingLength: data.maxNights,
        maxGuestsPerBooking: data.maxGuests,
        breakfastPrice: data.breakfastPrice,
      };

      updateSetting(updatedSettings);
    }
  };

  function onError() {}
  if (isUpdating) return <Spinner />;
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <FormRow label='Minimum nights/booking'>
            <Input
              type='number'
              id='min-nights'
              defaultValue={settings?.minBookingLength ?? undefined}
              register={register("minNights", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label='Maximum nights/booking'>
            <Input
              type='number'
              id='max-nights'
              defaultValue={settings?.maxBookingLength ?? undefined}
              register={register("maxNights", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label='Maximum guests/booking'>
            <Input
              type='number'
              id='max-guests'
              defaultValue={settings?.maxGuestsPerBooking ?? undefined}
              register={register("maxGuests", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow label='Breakfast price'>
            <Input
              type='number'
              id='breakfast-price'
              defaultValue={settings?.breakfastPrice ?? undefined}
              register={register("breakfastPrice", {
                required: "This field is required",
              })}
            />
          </FormRow>
          <FormRow
            children={
              <>
                <Button
                  variations='secondary'
                  size='medium'
                  children={"EDIT"}
                ></Button>
              </>
            }
          />
        </Form>
      </>
    );
  }
}

export default UpdateSettingsForm;
