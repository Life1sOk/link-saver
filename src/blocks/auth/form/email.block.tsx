import { useRef, useState } from "react";

import { useAuthorisationLogic } from "../../../utils/contollers/useAuthorisationLogic";

import Button from "../../../components/button/button.component";
import Input from "../../../components/input/input.component";
import LoadingSpinner from "../../../components/loading-spinner/loading-spinner.component";

import { ButtonLine } from "../../block.style";
import { AuthTitle, AuthWrapper, Form, Logs } from "../index.style";

import { ISectionChange } from "../../../utils/interfaces/auth";

const EmailBlock = ({ changeBlock }: ISectionChange) => {
  const [isMessage, setIsMessage] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);

  const { sendResetPasswordEmail, resetPasswordApiResult } = useAuthorisationLogic();

  const loginHandler = () => changeBlock("login");
  const passwordHandler = () => changeBlock("reset");

  const submitHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const email = emailRef.current?.value!;

    await sendResetPasswordEmail({ email })
      .then(() => passwordHandler())
      .catch(() => setIsMessage(true));
  };

  if (resetPasswordApiResult.isLoading) return <LoadingSpinner />;

  return (
    <AuthWrapper>
      <AuthTitle>Add your email</AuthTitle>
      <Form onSubmit={submitHandler}>
        <Input type="email" label="Email" required ref={emailRef} />
        <ButtonLine>
          <Button name="Send" type="submit" />
          <Button name="Cancel" type="button" actionHandle={loginHandler} />
        </ButtonLine>
      </Form>
      {isMessage && <Logs>Email doesn't exist</Logs>}
    </AuthWrapper>
  );
};

export default EmailBlock;
