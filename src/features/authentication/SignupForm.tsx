import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Error from "../../ui/Error";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
// Email regex: /\S+@\S+\.\S+/

export type SignupFormProps = {
  fullName: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

function SignupForm() {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<SignupFormProps>();
  const { isSignupIng, signup } = useSignup();
  const { errors } = formState;

  function onSubmit() {
    signup(
      {
        fullName: getValues().fullName,
        email: getValues().email,
        password: getValues().password,
      },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label='Full name'
        error={<Error errorText={errors.fullName?.message ?? ""} />}
      >
        <Input
          type='text'
          id='fullName'
          disabled={isSignupIng}
          register={register("fullName", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label='Email address'
        error={<Error errorText={errors.email?.message ?? ""} />}
      >
        <Input
          type='email'
          id='email'
          disabled={isSignupIng}
          register={register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow
        label='Password (min 8 characters)'
        error={<Error errorText={errors.password?.message ?? ""} />}
      >
        <Input
          type='password'
          id='password'
          disabled={isSignupIng}
          register={register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Repeat password'
        error={<Error errorText={errors.passwordConfirm?.message ?? ""} />}
      >
        <Input
          type='password'
          id='passwordConfirm'
          disabled={isSignupIng}
          register={register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variations='secondary' type='reset'>
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
