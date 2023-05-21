import { useAppSelector } from "../../App/store/hooks";
import { useReceivingBoxLocal } from "../../utils/helper-dispatch/useReceivingBoxLocal";

import Button from "../../components/button/button.component";
import BlankModal from "../../shared/blank/blank-section.modal";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  ReceivingModalStyle,
  Title,
  GroupsStore,
  ButtonWrapper,
} from "./receiving.style";

const ReceivingModal = () => {
  const isWindowOpen = useAppSelector((state) => state.receivingBox.isReceivingWindow);

  const { toggleReceivingBoxWindow } = useReceivingBoxLocal();

  return (
    <BlackWindowModal isOpen={isWindowOpen}>
      <ReceivingModalStyle onClick={(e) => e.stopPropagation()}>
        <Title>Receiving Box:</Title>
        <GroupsStore>
          {/* Here should be receiving groups */}
          <BlankModal title="Groups" />
        </GroupsStore>
        <ButtonWrapper>
          <Button name="Cancel" actionHandle={toggleReceivingBoxWindow} />
        </ButtonWrapper>
      </ReceivingModalStyle>
    </BlackWindowModal>
  );
};

export default ReceivingModal;
