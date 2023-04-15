import { useRef } from "react";

import Button from "../../components/button/button.component";

import { ButtonLine } from "../block.style";
import { RegistartionForm } from "./registration.style";
import Input from "../../components/input/input.component";
import { useRegisterMutation } from "../../App/store/api/registaration";


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

  // Проверка пароля 
  function checkPassword(password: string): boolean {
    const specialChars = /[*@!#%&()^~{}]+/;
    const lengthCheck = password.length >= 6;
    const specialCharCheck = specialChars.test(password);
  
    return lengthCheck && specialCharCheck;
  }
  
  // Запрос на сервер
  const [registerUser, { data, error, isLoading }] = useRegisterMutation();

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
  
    const firstName = firstNameRef.current?.value;
    const lastName = lastNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    const verifyPassword = verifyPasswordRef.current?.value;
  
    if (password !== verifyPassword) {
      alert("Error! The password is different from the verify one.");
      return;
    } else if (password && !checkPassword(password)) {
      alert("Error! The password should be at least 6 characters long and contain special characters.");
      return;
    }
  
    try {
      const response = await registerUser({
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });
      alert("Success!");
    } catch (error) {
      alert("Whooops something goes wrong!");
    }
  };

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