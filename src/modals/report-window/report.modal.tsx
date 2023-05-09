import Button from "../../components/button/button.component";
import Input from "../../components/input/input.component";
import TextArea from "../../components/textarea/textarea.component";
import { ButtonsWrapper, ReportWindowStyle, ReportWindowWrapper } from "./report.style";
import React from "react";

interface IReport {
  visible?: boolean;
  title?: string;
  content?: any | string;
  footer?: any | string;
  onClose: () => void;
}

const ReportModal = ({ visible = false, onClose }: IReport) => {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  React.useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  // если компонент невидим, то не отображаем его
  if (!visible) return null;

  return (
    <ReportWindowWrapper onClick={onClose}>
      <ReportWindowStyle onClick={(e) => e.stopPropagation()}>
        <Input type="text" label="Discribe your problem" />
        <TextArea defaultValue="Type your problem here" />
        <ButtonsWrapper>
          <Button name="Submit" type="submit" />
          <Button name="Back" type="button" actionHandle={onClose} />
        </ButtonsWrapper>
      </ReportWindowStyle>
    </ReportWindowWrapper>
  );
};

export default ReportModal;
