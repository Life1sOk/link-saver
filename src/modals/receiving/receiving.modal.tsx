import { useAppSelector } from "../../App/store/hooks";
import { useTransitionLogic } from "../../utils/contollers/useTransitionLogic";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";

import UserDisplay from "../../components/user-display/user-display.half";
import GroupDefault from "../../blocks/group-default/group-default.block";
import Button from "../../components/button/button.component";
import BlankModal from "../../shared/blank/blank-section.modal";

import { ITransRece } from "../../utils/interfaces/transition";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  ReceivingModalStyle,
  Title,
  GroupsStore,
  ButtonWrapper,
  GroupWrapper,
} from "./receiving.style";

const ReceivingModal = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const isWindowOpen = useAppSelector((state) => state.box.isReceivingWindow);
  const receivingBox = useAppSelector((state) => state.box.receivingBox);

  const { toggleReceivingBoxWindow } = useBoxLocal();
  const { acceptTransition } = useTransitionLogic();

  const acceptTransitionHandler = async (data: ITransRece) => {
    // console.log(data, "run");
    await acceptTransition(data, userId);
  };

  return (
    <BlackWindowModal isOpen={isWindowOpen}>
      <ReceivingModalStyle onClick={(e) => e.stopPropagation()}>
        <Title>Receiving Box:</Title>
        <GroupsStore>
          {receivingBox.map((data) => (
            <GroupWrapper key={data.transition_id}>
              <UserDisplay
                user={data.from}
                actionHandlerOne={{
                  action: () => acceptTransitionHandler(data),
                  call: "Accept",
                }}
                actionHandlerTwo={{ action: () => {}, call: "Fuck off" }}
              />
              <GroupDefault data={data.group} />
            </GroupWrapper>
          ))}
          {/* <BlankModal title="Groups" /> */}
        </GroupsStore>
        <ButtonWrapper>
          <Button name="Cancel" actionHandle={toggleReceivingBoxWindow} />
        </ButtonWrapper>
      </ReceivingModalStyle>
    </BlackWindowModal>
  );
};

export default ReceivingModal;
