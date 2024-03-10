import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRowVertical from "../../ui/FormRowVertical";
import Input from "../../ui/Input";
import Spinner from "../../ui/Spinner";
import { useLogin } from "./useLogin";

export type LoginInputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<LoginInputs>();

  const { login, isLogining } = useLogin();
  function onSubmit() {
    const email = getValues().email;
    const password = getValues().password;
    login({ email: email, password: password });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRowVertical label='Email address'>
        <Input
          type='email'
          id='email'
          // This makes this form better for password managers
          autoComplete='username'
          placeholder='Enter Email'
          register={register("email")}
          disabled={isLogining}
        />
      </FormRowVertical>
      <FormRowVertical label='Password'>
        <Input
          type='password'
          id='password'
          autoComplete='current-password'
          placeholder='Enter password'
          disabled={isLogining}
          register={register("password")}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size='large'>{isLogining ? <Spinner /> : "Log in"}</Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
