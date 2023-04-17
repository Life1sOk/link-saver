import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../App/store/hooks";
import { usersDataStore } from "../../App/store/slices/user.slice";
import { useLoginMutation } from "../../App/store/api/login";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { LogInPageStyle } from "./login.style";
import { ButtonLine } from "../block.style";

interface ILogin {
  changeBlock: (block: string) => void;
}

const LoginBlock = ({ changeBlock }: ILogin) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Изменяем блоки
  const changeHandler = () => changeBlock("registration");

  // Отправка запроса на сервер
  const [loginMutation, { isLoading, isError, isSuccess }] = useLoginMutation();

  const onSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const loginObj = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    // User
    const response = await loginMutation(loginObj);

    dispatch(usersDataStore(response));
  };

  useEffect(() => {
    if (isSuccess) navigate("/main");
  }, [isSuccess, navigate]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <h1>Weclome to Linky!</h1>
      <LogInPageStyle onSubmit={onSubmit} id="login">
        <Input type="email" label="Email" ref={emailRef} required />
        <Input type="password" label="Password:" ref={passwordRef} required />
        <ButtonLine>
          <Button
            name="Log in"
            type="submit"
            form="login"
            disabled={isLoading}
          />
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
