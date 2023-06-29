import { useRef, useState } from "react";

import { useAuthorisationLogic } from "../../utils/contollers/useAuthorisationLogic";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { AuthTitle, AuthWrapper, Form } from "./index.style";
import { ButtonLine } from "../block.style";

import { ISectionChange } from "../../utils/interfaces/auth";

const LoginBlock = ({ changeBlock }: ISectionChange) => {
  const [errorMess, setErrorMess] = useState<string>(
    "An error occurred while logging in."
  );

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { loginUser, loginUserApiResult } = useAuthorisationLogic();

  // Изменяем блоки
  const changeHandler = () => changeBlock("registration");

  // Отправка запроса на сервер
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const loginObj = {
      email: emailRef.current?.value!,
      password: passwordRef.current?.value!,
    };

    await loginUser(loginObj).catch((err) => {
      if (err.data) setErrorMess(err.data);
      // console.log(err.data);
    });
  };

  if (loginUserApiResult.isLoading) return <LoadingSpinner />;

  return (
    <AuthWrapper>
      <AuthTitle>Weclome to Linky!</AuthTitle>
      <Form onSubmit={onSubmit} id="login">
        <Input type="email" label="Email" ref={emailRef} required />
        <Input type="password" label="Password:" ref={passwordRef} required />
        <ButtonLine>
          <Button
            name="Log in"
            type="submit"
            form="login"
            disabled={loginUserApiResult.isLoading}
          />
          <Button name="Registration" actionHandle={changeHandler} type="button" />
        </ButtonLine>
        {loginUserApiResult.isError && <span>{errorMess}</span>}
      </Form>
    </AuthWrapper>
  );
};

export default LoginBlock;
