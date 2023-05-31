import BlackWindowModal from "../../shared/black-window/black-window.modal";

import Button from "../../components/button/button.component";

import { AreYouSureStyle, ButtonsWrapper, Message } from "./are-you-sure.style";

interface ISure {
  isActive: boolean;
  actionSureHandler: () => void;
  actionToggleHandler: () => void;
  message: string;
}

const AreYouSureModal = ({
  isActive,
  message,
  actionSureHandler,
  actionToggleHandler,
}: ISure) => {
  if (!isActive) return <></>;

  return (
    <BlackWindowModal isOpen={isActive}>
      <AreYouSureStyle>
        <Message>{message}</Message>
        <ButtonsWrapper>
          <Button name="Yes, I'm sure" actionHandle={actionSureHandler} />
          <Button name="No, I'm not" actionHandle={actionToggleHandler} />
        </ButtonsWrapper>
      </AreYouSureStyle>
    </BlackWindowModal>
  );
};

export default AreYouSureModal;
