import { useRef } from "react";

import Button from "../../../components/button/button.component";
import Input from "../../../components/input/input.component";

import { checkPassword } from "../../../utils/helpers/others";

import { ButtonLine } from "../../block.style";
import { AuthTitle, AuthWrapper, Form } from "../index.style";

interface IPassBlock {
  actionHandler: (newPassword: string) => void;
}

const PasswordBlock = ({ actionHandler }: IPassBlock) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const verifyPasswordRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

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

    actionHandler(password);
  };

  return (
    <AuthWrapper>
      <AuthTitle>Reset password</AuthTitle>
      <Form onSubmit={submitHandler}>
        <Input type="password" label="New password" required ref={passwordRef} />
        <Input type="password" label="Verify password" required ref={verifyPasswordRef} />
        <ButtonLine>
          <Button name="Add new password" type="submit" />
        </ButtonLine>
      </Form>
    </AuthWrapper>
  );
};

export default PasswordBlock;
