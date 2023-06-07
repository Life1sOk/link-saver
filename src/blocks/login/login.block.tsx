import { useRef, useState } from "react";

import { useAuthorisationLogic } from "../../utils/contollers/useAuthorisationLogic";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { LogInPageStyle, LoginWrapper, LoginTitle } from "./login.style";
import { ButtonLine } from "../block.style";

interface ILogin {
  changeBlock: (block: string) => void;
}

const LoginBlock = ({ changeBlock }: ILogin) => {
  const [errorMess, setErrorMess] = useState("An error occurred while logging in.");

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
      if (err) setErrorMess(err?.data);
    });
  };

  if (loginUserApiResult.isLoading) return <LoadingSpinner />;

  return (
    <LoginWrapper>
      <LoginTitle>Weclome to Linky!</LoginTitle>
      <LogInPageStyle onSubmit={onSubmit} id="login">
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
        {loginUserApiResult?.isError && <p>{errorMess}</p>}
      </LogInPageStyle>
    </LoginWrapper>
  );
};

export default LoginBlock;
