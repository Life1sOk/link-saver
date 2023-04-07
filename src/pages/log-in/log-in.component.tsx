import { Link } from "react-router-dom";
import { LogInPageStyle, Title, LoginField, PasswordField, FancyButton, ButtonLine } from "./log-in.style";


const LogInPage = () => {

  return (
    <LogInPageStyle>
      <Title>Weclome to Linky!</Title>
      <br/>
      <Title>Login:</Title>
      <LoginField/>
      <Title>Password:</Title>
      <PasswordField/>
      <ButtonLine>
      <Link to="/registration">
      <FancyButton>Sigh in</FancyButton>
      </Link>
      <FancyButton>Login in</FancyButton>
      </ButtonLine>
    </LogInPageStyle>
  );
};

export default LogInPage;