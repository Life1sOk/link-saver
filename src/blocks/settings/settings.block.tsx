import { useRef, useState } from "react";
import { SettingsBlockWrapper, SettingsBlockColumn } from "./settings.style";
import { icons } from "../../utils/react-icons";
import { useDispatch, useSelector} from 'react-redux';
import { openModal, closeModal } from "../../App/store/slices/settings.slice";
import Button from "../../components/button/button.component";
import { RootState } from "../../App/store/store";
import SettingsModal from "../../modals/settings-window/settings-window.modal";

const SettingsBlock = () =>{
    const [isActive, setIsActive] = useState(false);
    const [isWhiteTheme, setIsWhiteTheme] = useState(false);
    const userRef = useRef<HTMLInputElement>(null);
    let username = userRef.current?.value!;
    const settingsData = useSelector((state: RootState) => state.settings.data);
    const dispatch = useDispatch();

    const handleSettingsClick = () => {
      dispatch(openModal());
      setIsActive(true);
    };
  
    const handleCloseClick = () => {
      dispatch(closeModal());
      setIsActive(false);
    };
  
    const handleDarkModeClick = () => {
      setIsWhiteTheme(!isWhiteTheme);
    };
  
    const handleConstructorModeClick = () => {
      // Добавьте код для обработки нажатия на кнопку "Constructor mode"
    };


    return (
        <SettingsBlockWrapper className={isWhiteTheme ? "whitetheme" : ""}>
        <Button name="FAQ" className="textbutton">{icons.faq}</Button>
        <Button name="Settings" onClick={handleSettingsClick} className="textbutton">{icons.settings} </Button>
        <Button name="Get help" className="textbutton">{icons.help} </Button>
        <Button name={username} className="textbutton">{icons.user} </Button>
        <Button name="Log out" className="textbutton" />
        <SettingsBlockColumn>
        <SettingsModal
            isActive={isActive}
            message="Settngs"
            actionDarkModeHandler={handleDarkModeClick}
            actionConstructorModeHandler={handleConstructorModeClick}
            actionCloseHandler={handleCloseClick}
        />
        </SettingsBlockColumn>
        </SettingsBlockWrapper>
    )
};

export default SettingsBlock;