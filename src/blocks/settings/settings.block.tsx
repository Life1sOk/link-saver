import { useRef, useState } from "react";
import { SettingsBlockWrapper, SettingsBlockColumn } from "./settings.style";
import { icons } from "../../utils/react-icons";
import Button from "../../components/button/button.component";


const SettingsBlock = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const username = userRef.current?.value;

  const handleReportClick = () => {
    open();
  };


  return (
    <SettingsBlockWrapper >
      <Button name="FAQ" className="textbutton">
        {icons.faq}
      </Button>
      <Button name="Dark Mode" className="textbutton">
        {icons.settings}{" "}
      </Button>
      <Button name="Report" className="textbutton">
        {icons.help}{" "}
      </Button>
      <Button name="User" className="textbutton">
        {icons.user}{" "}
      </Button>
      <Button name="Log out" className="textbutton" />
      <Button name="Report" onClick={handleReportClick} className="textbutton" />
      <SettingsBlockColumn></SettingsBlockColumn>
    </SettingsBlockWrapper>
  );
};

export default SettingsBlock;