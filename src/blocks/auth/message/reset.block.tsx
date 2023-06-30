import { useNavigate } from "react-router-dom";

import { icons } from "../../../utils/react-icons";

import Button from "../../../components/button/button.component";

import { ButtonLine } from "../../block.style";
import { AuthWrapper, Message, IconWrapper, Form } from "../index.style";

import { ISectionChange } from "../../../utils/interfaces/auth";

const ResetBlock = ({ changeBlock }: ISectionChange) => {
  const navigate = useNavigate();

  const changeBlockLogin = () => {
    changeBlock("login");
    navigate("/");
  };

  return (
    <AuthWrapper>
      <Form>
        <IconWrapper type="verify">{icons.verify}</IconWrapper>
        <Message type="verify">
          Please check your email for the password reset information.
        </Message>
        <ButtonLine>
          <Button name="Log In" actionHandle={changeBlockLogin} />
        </ButtonLine>
      </Form>
    </AuthWrapper>
  );
};

export default ResetBlock;
