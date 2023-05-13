import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { icons } from "../../utils/react-icons";

import SettingAction from "../../components/setting-action/setting-action.component";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";

import { toggleTheme } from "../../App/store/slices/theme.slice";

import ReportModal from "../../modals/report-window/report.modal";
import { SettingsBlockStyle } from "./settings.style";

const SettingsBlock = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const activeTheme = useAppSelector((state) => state.theme.currentTheme);

  const [isModal, setModal] = useState(false);

  const closeModalHandler = () => setModal(false);
  const openModalHandler = () => setModal(true);

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
      <ReportModal visible={isModal} onClose={closeModalHandler} />
      <SettingAction
        title="Theme"
        mode="icon-only"
        icon={icons.themePick}
        actionHandler={toggleThemeHandler}
      />
      <SettingAction
        title="Report"
        mode="icon-only"
        actionHandler={openModalHandler}
        icon={icons.exclamation}
      />
      <SettingAction title="FAQ" icon={icons.question} mode="icon-only" />
      <SettingAction title="Log out" icon={icons.logout} actionHandler={logOutHandler} />
    </SettingsBlockStyle>
  );
};

export default SettingsBlock;
