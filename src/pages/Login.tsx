// import styled from "styled-components";

import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";
import LoginLayout from "../ui/LoginLayout";
import Logo from "../ui/Logo";

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading style={"h4"}>Login in to your account </Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
