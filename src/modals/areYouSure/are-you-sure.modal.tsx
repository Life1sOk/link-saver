import Button from "../../components/button/button.component";

import {
  AreYouSureWrapper,
  AreYouSureStyle,
  ButtonsWrapper,
  Message,
} from "./are-you-sure.style";

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
    <AreYouSureWrapper>
      <AreYouSureStyle>
        <Message>{message}</Message>
        <ButtonsWrapper>
          <Button
            name="Yes, I'm mat' ego sure"
            actionHandle={actionSureHandler}
          />
          <Button name="No, I'm girl" actionHandle={actionToggleHandler} />
        </ButtonsWrapper>
      </AreYouSureStyle>
    </AreYouSureWrapper>
  );
};

export default AreYouSureModal;
