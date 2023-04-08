import { useRef } from "react";

import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";

import { LogInPageStyle } from "./login.style";
import { ButtonLine } from "../block.style";

interface ILogin {
  changeBlock: (block: string) => void;
}

const LoginBlock = ({ changeBlock }: ILogin) => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  // Изменяем блоки
  const changeHandler = () => changeBlock("registration");

  // Запрос на сервер
  const submitHandler = async (event: React.SyntheticEvent) => {
    // Сабмит эвент по дефолту перезапускает страницу, ниже мы просто запрещаем дефолтное поведение - Это и было проблемой
    event.preventDefault();

    // Создаем обьект и закидываем туда значение инпутов
    const loginObj = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    // Делаем запрос на сервер
    const response = await fetch("http://localhost:3000/signin", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...loginObj }),
    });
    // Изменяем формат на обычный
    const result = await response.json();

    console.log(result);
  };

  return (
    <>
      <h1>Weclome to Linky!</h1>
      <LogInPageStyle onSubmit={submitHandler} id="login">
        <Input type="email" label="Email" ref={emailRef} required />
        <Input type="password" label="Password:" ref={passwordRef} required />
        <ButtonLine>
          <Button name="Log in" type="submit" form="login" />
          <Button
            name="Registration"
            actionHandle={changeHandler}
            type="button"
          />
        </ButtonLine>
      </LogInPageStyle>
    </>
  );
};

export default LoginBlock;
