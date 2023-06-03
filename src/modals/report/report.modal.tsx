import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useRepfaqLocal } from "../../utils/helper-dispatch/useRepfaqLocal";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import Input from "../../components/input/input.component";
import TextArea from "../../components/textarea/textarea.component";
import Button from "../../components/button/button.component";

import { ReportStyle, Title, ReportBody, ButtonsWrapper } from "./report.style";

const ReportModal = () => {
  const isOpen = useAppSelector((state) => state.repfaq.isReportWindow);

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const { toggleReportLocal } = useRepfaqLocal();

  const sendReportHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Take text
    const title = titleRef.current?.value!;
    const description = descRef.current?.value!;

    // Prepare obj
    const upObj = { title, description };

    // Function that send data some-where
    console.log(upObj);

    // Refresh
    if (titleRef.current && descRef.current) {
      titleRef.current.value = "";
      descRef.current.value = "";
    }

    // Close window;
    toggleReportLocal();
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <ReportStyle onSubmit={sendReportHandler}>
        <Title>Report</Title>
        <ReportBody>
          <Input label="Title:" type="text" ref={titleRef} />
          <TextArea label="Description" ref={descRef} />
        </ReportBody>
        <ButtonsWrapper>
          <Button name="Cancel" actionHandle={toggleReportLocal} type="button" />
          <Button name="Send" type="submit" />
        </ButtonsWrapper>
      </ReportStyle>
    </BlackWindowModal>
  );
};

export default ReportModal;
