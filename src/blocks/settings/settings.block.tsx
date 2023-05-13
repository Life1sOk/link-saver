import { useState } from "react";

import { icons } from "../../utils/react-icons";

import SettingAction from "../../components/setting-action/setting-action.component";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";

import { toggleTheme } from "../../App/store/slices/theme.slice";

import ReportModal from "../../modals/report-window/report.modal";
import { SettingsBlockStyle } from "./settings.style";

const SettingsBlock = () => {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector((state) => state.theme.currentTheme);

  const [isModal, setModal] = useState(false);

  const closeModalHandler = () => setModal(false);
  const openModalHandler = () => setModal(true);

  const toggleThemeHandler = () => {
    if (activeTheme === "light") dispatch(toggleTheme("dark"));
    if (activeTheme === "dark") dispatch(toggleTheme("light"));
  };

  return (
    <SettingsBlockStyle>
      <SettingAction
        title="Theme"
        icon={icons.themePick}
        actionHandler={toggleThemeHandler}
      />
      <SettingAction
        title="Report"
        actionHandler={openModalHandler}
        icon={icons.exclamation}
      />
      <SettingAction title="FAQ" icon={icons.question} />
      <SettingAction title="Log out" icon={icons.logout} />
      <ReportModal visible={isModal} onClose={closeModalHandler} />
    </SettingsBlockStyle>
  );
};

export default SettingsBlock;
