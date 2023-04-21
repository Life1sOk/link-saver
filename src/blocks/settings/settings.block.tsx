import { useRef, useState } from "react";
import { SettingsBlockWrapper, SettingsBlockColumn } from "./settings.style";
import { icons } from "../../utils/react-icons";
import Button from "../../components/button/button.component";
import ReportModal from "../../modals/report-window/report.modal";


const SettingsBlock = () => {
  const [isModal, setModal] = useState(false)
  const onClose = () => setModal(false)


  return (
    <SettingsBlockWrapper >
      <Button name="FAQ" className="textbutton">
        {icons.faq}
      </Button>
      <Button name="Dark Mode" className="textbutton">
        {icons.settings}{" "}
      </Button>
      <Button name="User" className="textbutton">
        {icons.user}{" "}
      </Button>
      <Button name="Log out" className="textbutton" />
      <Button name="Report" onClick={() => {
        setModal(true);
        }} type="button" />
      <ReportModal
        visible={isModal}
        title='Заголовок'
        content={<p>Что-то важное</p>}
        footer={<button onClick={onClose}>Закрыть</button>}
        onClose={onClose}
      />
    </SettingsBlockWrapper>
  );
};

export default SettingsBlock;