import { title } from "process";
import Input from "../../components/input/input.component";
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
                <Input type="text" label="Discribe your problem"/>
                <textarea>{}</textarea>
              </ButtonsWrapper>
            </SettingsWindowStyle>
          </SettingsWindowWrapper>
        )}
      </>
    );
  };
  
  export default SettingsModal;