import Button from "../../components/button/button.component";
import { ButtonsWrapper, Message, SettingsWindowStyle, SettingsWindowWrapper } from "./settings-window.style";


interface ISettings {
    isActive: boolean;
    actionDarkModeHandler: () => void;
    actionConstructorModeHandler: () => void;
    actionCloseHandler: () => void;
    message: string;
  }


  const SettingsModal = ({
    isActive,
    message,
    actionDarkModeHandler,
    actionConstructorModeHandler,
    actionCloseHandler,
  }: ISettings) => {
    return (
      <>
        {isActive && (
          <SettingsWindowWrapper>
            <SettingsWindowStyle>
              <Message>{message}</Message>
              <ButtonsWrapper>
                <Button
                  name="Dark mode"
                  actionHandle={actionDarkModeHandler}
                />
                <Button name="Constructor mode" actionHandle={actionConstructorModeHandler} />
                <Button name="Close" actionHandle={actionCloseHandler} />
              </ButtonsWrapper>
            </SettingsWindowStyle>
          </SettingsWindowWrapper>
        )}
      </>
    );
  };
  
  export default SettingsModal;
  