import { Link } from "react-router-dom";
import { LogInPageStyle } from "./log-in.style";
import { Title } from "../../App/components/title.component";
import { InputField } from "../../App/components/input.component";
import { FancyButton } from "../../App/components/button.component";
import { ButtonLine } from "../../App/components/crutches-for-layout";


const LogInPage = () => {

  return (
    <LogInPageStyle>
      <Title>Weclome to Linky!</Title>
      <br />
      <Title>Login:</Title>
      <InputField id="userLogin" type="text" />
      <Title>Password:</Title>
      <InputField id="userPassword" type="password" />
      <ButtonLine>
        <Link to="/registration">
          <FancyButton>
            Sigh in
          </FancyButton>
        </Link>
        <FancyButton>
          Login in
        </FancyButton>
      </ButtonLine>
    </LogInPageStyle>
  );
};

export default LogInPage;