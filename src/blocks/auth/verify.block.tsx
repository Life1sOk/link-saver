import { useState, useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import { useAuthorisationLogic } from "../../utils/contollers/useAuthorisationLogic";
import { useCountdown } from "../../utils/helpers/useCountdown";

import Button from "../../components/button/button.component";
import { ISectionChange } from "../../utils/interfaces/auth";

import { ButtonLine } from "../block.style";
import {
  AuthWrapper,
  Message,
  IconWrapper,
  Form,
  ButtonShadow,
  Logs,
} from "./index.style";

const VerifyBlock = ({ changeBlock }: ISectionChange) => {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [targetDate, setTargetDate] = useState(new Date().getTime() + 300 * 1000);

  const [minutes, seconds] = useCountdown(targetDate);

  const userVerif = useAppSelector((state) => state.auth.verification);
  const { sendVerificationEmail } = useAuthorisationLogic();

  const changeBlockLogin = () => changeBlock("login");

  const sendVerificationAgain = async () => {
    await sendVerificationEmail(userVerif).then(() =>
      setTargetDate(new Date().getTime() + 300 * 1000)
    );
  };

  useEffect(() => {
    if (minutes <= 0 && seconds <= 0) setIsSendEmail(true);
    if (minutes >= 0 && seconds >= 0) setIsSendEmail(false);
  }, [minutes, seconds]);

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
          <ButtonShadow isActive={isSendEmail}>
            <Button
              disabled={!isSendEmail}
              name="Send verification again"
              actionHandle={sendVerificationAgain}
            />
          </ButtonShadow>
        </ButtonLine>
        {!isSendEmail && (
          <Logs>
            <strong>{`${minutes} : ${seconds < 10 ? "0" : ""}${seconds}`}</strong> <br />{" "}
            Until the next verification email
          </Logs>
        )}
      </Form>
    </AuthWrapper>
  );
};

export default VerifyBlock;
