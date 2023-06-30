import { useRef, useState } from "react";

import { useAppSelector } from "../../../App/store/hooks";
import { useAuthorisationLogic } from "../../../utils/contollers/useAuthorisationLogic";

import Button from "../../../components/button/button.component";
import Input from "../../../components/input/input.component";
import LoadingSpinner from "../../../components/loading-spinner/loading-spinner.component";

import { AuthTitle, AuthWrapper, Form, Logs } from "../index.style";
import { ButtonLine } from "../../block.style";

import { ISectionChange } from "../../../utils/interfaces/auth";

const messageType = {
  verification: "User wasn't verified, please check your email",
  password: "Wrong credentials!",
};

const LoginBlock = ({ changeBlock }: ISectionChange) => {
  const [errorMess, setErrorMess] = useState<string>("");
  const userVerif = useAppSelector((state) => state.auth.verification);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const { loginUser, loginUserApiResult, sendVerificationEmail } =
    useAuthorisationLogic();

  // Изменяем блоки
  const changeHandler = () => changeBlock("registration");
  const changeResetHandler = () => changeBlock("email");

  const sendVerificationEmailHandler = async () => {
    if (userVerif.email.length > 0) await sendVerificationEmail(userVerif);
    changeBlock("verify");
  };

  // Отправка запроса на сервер
  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const loginObj = {
      email: emailRef.current?.value!,
      password: passwordRef.current?.value!,
    };

    await loginUser(loginObj).catch((err) => {
      if (typeof err.data === "string") setErrorMess(err.data);
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
      </Form>
      {"" === errorMess ? (
        <Logs>
          <span className="reset" onClick={changeResetHandler}>
            Forgot your password?
          </span>
        </Logs>
      ) : messageType.verification === errorMess ? (
        <Logs>
          {errorMess}
          <br />
          <span className="anchor" onClick={sendVerificationEmailHandler}>
            Send verification again
          </span>
        </Logs>
      ) : messageType.password === errorMess ? (
        <Logs>
          {errorMess}
          <br />
          <span className="anchor" onClick={changeResetHandler}>
            Reset password by email
          </span>
        </Logs>
      ) : (
        <Logs>{errorMess}</Logs>
      )}
    </AuthWrapper>
  );
};

export default LoginBlock;
