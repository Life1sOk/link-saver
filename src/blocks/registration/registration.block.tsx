import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../App/store/hooks";
import { usersSessionStore } from "../../App/store/slices/user.slice";
import { useRegisterMutation } from "../../App/store/api/user";

import Button from "../../components/button/button.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import Input from "../../components/input/input.component";

import { ButtonLine } from "../block.style";
import { RegistartionForm, RegistartionWrapper, RegTitle } from "./registration.style";

interface ILogin {
  changeBlock: (block: string) => void;
}

const RegistrationBlock = ({ changeBlock }: ILogin) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userNameRef = useRef<HTMLInputElement>(null);
  // const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const verifyPasswordRef = useRef<HTMLInputElement>(null);

  const changeHandler = () => changeBlock("login");

  // Проверка пароля
  function checkPassword(password: string): boolean {
    const specialChars = /[*@!#%&()^~{}]+/;
    const lengthCheck = password.length >= 6;
    const specialCharCheck = specialChars.test(password);

    return lengthCheck && specialCharCheck;
  }

  // Запрос на сервер
  const [registerUserApi, { isSuccess, isLoading }] = useRegisterMutation();

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const username = userNameRef.current?.value!;
    const email = emailRef.current?.value!;
    const password = passwordRef.current?.value!;
    const verifyPassword = verifyPasswordRef.current?.value;

    if (password !== verifyPassword) {
      alert("Error! The password is different from the verify one.");
      return;
    } else if (password && !checkPassword(password)) {
      alert(
        "Error! The password should be at least 6 characters long and contain special characters."
      );
      return;
    }

    // User
    const response = await registerUserApi({
      username: username,
      email: email,
      password: password,
    });

    dispatch(usersSessionStore(response));
  };

  useEffect(() => {
    if (isSuccess) navigate("/main");
  }, [isSuccess, navigate]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <RegistartionWrapper>
      <RegTitle>Registration</RegTitle>
      <RegistartionForm onSubmit={submitHandler}>
        <Input type="text" label="username" required ref={userNameRef} />
        <Input type="email" label="email" required ref={emailRef} />
        <Input type="password" label="password" required ref={passwordRef} />
        <Input type="password" label="verify password" required ref={verifyPasswordRef} />
        <ButtonLine>
          <Button name="Register" type="submit" />
          <Button name="Back" actionHandle={changeHandler} type="button" />
        </ButtonLine>
      </RegistartionForm>
    </RegistartionWrapper>
  );
};

export default RegistrationBlock;
