import { useState } from "react";

import Button from "../../components/button/button.component";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";

import { toggleTheme } from "../../App/store/slices/theme.slice";

import ReportModal from "../../modals/report-window/report.modal";
import { SettingsBlockWrapper } from "./settings.style";

const SettingsBlock = () => {
  const dispatch = useAppDispatch();
  const activeTheme = useAppSelector((state) => state.theme.currentTheme);

  const [isModal, setModal] = useState(false);
  const onClose = () => setModal(false);

  const toggleThemeHandler = () => {
    if (activeTheme === "light") dispatch(toggleTheme("dark"));
    if (activeTheme === "dark") dispatch(toggleTheme("light"));
  };

  return (
    <SettingsBlockWrapper>
      <Button name="FAQ" className="textbutton"></Button>
      <Button
        name="Night Mode"
        className="textbutton"
        actionHandle={toggleThemeHandler}
      ></Button>
      <Button name="User" className="textbutton"></Button>
      <Button name="Log out" className="textbutton" />
      <Button
        name="Report"
        actionHandle={() => {
          setModal(true);
        }}
        type="button"
      />
      <ReportModal
        visible={isModal}
        footer={<button onClick={onClose}>Закрыть</button>}
        onClose={onClose}
      />
    </SettingsBlockWrapper>
  );
};

export default SettingsBlock;
