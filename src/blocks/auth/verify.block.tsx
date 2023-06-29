import { icons } from "../../utils/react-icons";

import Button from "../../components/button/button.component";

import { ButtonLine } from "../block.style";
import { AuthWrapper, Message, IconWrapper, Form } from "./index.style";

import { ISectionChange } from "../../utils/interfaces/auth";

const VerifyBlock = ({ changeBlock }: ISectionChange) => {
  const changeBlockLogin = () => changeBlock("login");

  const sendVerificationAgain = () => console.log("send");

  return (
    <AuthWrapper>
      <Form>
        <IconWrapper type="verify">{icons.verify}</IconWrapper>
        <Message type="verify">
          User was registered successfully!
          <br /> Please check your email.
          <br /> It may take a few moments for the email to arrive.
        </Message>
        <ButtonLine>
          <Button name="Log In" actionHandle={changeBlockLogin} />
          <Button name="Send verification again" actionHandle={sendVerificationAgain} />
        </ButtonLine>
      </Form>
    </AuthWrapper>
  );
};

export default VerifyBlock;
