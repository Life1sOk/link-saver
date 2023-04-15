import { useRef } from "react";
import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import { LogInPageStyle } from "./login.style";
import { ButtonLine } from "../block.style";
import { useLoginMutation } from "../../App/store/api/login";

interface ILogin {
  changeBlock: (block: string) => void;
}

const LoginBlock = ({ changeBlock }: ILogin) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Изменяем блоки
  const changeHandler = () => changeBlock("registration");

  // Отправка запроса на сервер
  const [loginMutation, { isLoading, isError }] = useLoginMutation();

  const onSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const loginObj = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    loginMutation(loginObj);
  };

  return (
    <>
      <h1>Weclome to Linky!</h1>
      <LogInPageStyle onSubmit={onSubmit} id="login">
        <Input type="email" label="Email" ref={emailRef} required />
        <Input type="password" label="Password:" ref={passwordRef} required />
        <ButtonLine>
          <Button name="Log in" type="submit" form="login" disabled={isLoading} />
          <Button
            name="Registration"
            actionHandle={changeHandler}
            type="button"
          />
        </ButtonLine>
        {isError && <p>An error occurred while logging in.</p>}
      </LogInPageStyle>
    </>
  );
};

export default LoginBlock;