import { useRef } from "react";

import Button from "../../components/button/button.component";

import { ButtonLine } from "../block.style";
import { RegistartionForm } from "./registration.style";
import Input from "../../components/input/input.component";

interface ILogin {
  changeBlock: (block: string) => void;
}

const RegistrationBlock = ({ changeBlock }: ILogin) => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const verifyPasswordRef = useRef<HTMLInputElement>(null);

  const changeHandler = () => changeBlock("login");

  // Запрос на сервер
  const submitHandler = async (event: React.SyntheticEvent) => {};

  return (
    <RegistartionForm onSubmit={submitHandler}>
      <h2>Registration page!</h2>
      <Input type="text" label="Your First name" required ref={firstNameRef} />
      <Input type="text" label="Your Last name" ref={lastNameRef} />
      <Input type="email" label="email" required ref={emailRef} />
      <Input type="password" label="Password" required ref={passwordRef} />
      <Input
        type="password"
        label="Verify Password"
        required
        ref={verifyPasswordRef}
      />
      <ButtonLine>
        <Button name="Finish registration!" type="submit" />
        <Button name="Back" actionHandle={changeHandler} type="button" />
      </ButtonLine>
    </RegistartionForm>
  );
};

export default RegistrationBlock;

/*
  1) Подготовить обьект для отправки запроса на сервер 
    Обьект: {
      username: string, // Full name
      email: string,
      password: number,
    }
  2) Закончить submitHandler функцию:
    В функции нужно проверить сходство паролей - если нет, указать пользователю об этом;
  */
