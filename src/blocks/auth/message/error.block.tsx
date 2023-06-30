import { useNavigate } from "react-router-dom";

import { icons } from "../../../utils/react-icons";

import Button from "../../../components/button/button.component";

import { ButtonLine } from "../../block.style";
import { AuthWrapper, Message, IconWrapper, Form } from "../index.style";

import { ISectionChange } from "../../../utils/interfaces/auth";

const ErrorBlock = ({ changeBlock }: ISectionChange) => {
  const navigate = useNavigate();

  const changeBlockLogin = () => {
    changeBlock("login");
    navigate("/");
  };

  return (
    <AuthWrapper>
      <Form>
        <IconWrapper>{icons.regFail}</IconWrapper>
        <Message>
          Something failed. <br /> Please, check your internet connection and try again.
        </Message>
        <ButtonLine>
          <Button name="Back to login" actionHandle={changeBlockLogin} />
        </ButtonLine>
      </Form>
    </AuthWrapper>
  );
};

export default ErrorBlock;
