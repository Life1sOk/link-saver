import { useNavigate } from "react-router-dom";

import { icons } from "../../utils/react-icons";

import SettingAction from "../../components/setting-action/setting-action.component";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { useRepfaqLocal } from "../../utils/helper-dispatch/useRepfaqLocal";

import { toggleTheme } from "../../App/store/slices/theme.slice";

import { SettingsBlockStyle } from "./settings.style";

const SettingsBlock = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeTheme = useAppSelector((state) => state.theme.currentTheme);

  const { toggleReportLocal } = useRepfaqLocal();

  const toggleThemeHandler = () => {
    if (activeTheme === "light") dispatch(toggleTheme("dark"));
    if (activeTheme === "dark") dispatch(toggleTheme("light"));
  };

  const logOutHandler = () => {
    window.sessionStorage.removeItem("token");

    navigate("/");
  };

  return (
    <SettingsBlockStyle>
      <SettingAction
        title={activeTheme === "dark" ? "Light theme" : "Dark theme"}
        icon={icons.themePick}
        actionHandler={toggleThemeHandler}
      />
      <SettingAction
        title="Report"
        actionHandler={toggleReportLocal}
        icon={icons.exclamation}
      />
      <SettingAction title="FAQ  ?" icon={icons.question} />
      <SettingAction title="Log out" icon={icons.logout} actionHandler={logOutHandler} />
    </SettingsBlockStyle>
  );
};

export default SettingsBlock;
