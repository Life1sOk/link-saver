import { useNavigate } from "react-router-dom";

import { icons } from "../../../utils/react-icons";

import Button from "../../../components/button/button.component";

import { ButtonLine } from "../../block.style";
import { AuthWrapper, Message, IconWrapper, Form } from "../index.style";

import { ISectionChange } from "../../../utils/interfaces/auth";

const WelcomeBlock = ({ changeBlock }: ISectionChange) => {
  const navigate = useNavigate();

  const changeBlockLogin = () => {
    changeBlock("login");
    navigate("/");
  };

  return (
    <AuthWrapper>
      <Form>
        <IconWrapper type="verify">{icons.smile}</IconWrapper>
        <Message type="verify">
          Thank you for completing the registration!
          <br />
          Please log in now and enjoy using my app.
        </Message>
        <ButtonLine>
          <Button name="Log In" actionHandle={changeBlockLogin} />
        </ButtonLine>
      </Form>
    </AuthWrapper>
  );
};

export default WelcomeBlock;
