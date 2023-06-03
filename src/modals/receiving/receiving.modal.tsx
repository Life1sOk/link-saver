import { useEffect } from "react";

import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { useTransitionLogic } from "../../utils/contollers/useTransitionLogic";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";

import UserDisplay from "../../components/user-display/user-display.half";
import GroupDefault from "../../blocks/group/group.default";
import Button from "../../components/button/button.component";
import Blank from "../../components/blank/blank-section.modal";

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
  const isPull = useAppSelector((state) => state.box.pull);
  const receivingBox = useAppSelector((state) => state.box.receivingBox);

  const { toggleReceivingBoxWindow } = useBoxLocal();
  const { acceptTransition, getTransitions, cancleTransition } = useTransitionLogic();

  const acceptTransitionHandler = async (data: ITransRece) =>
    await acceptTransition(data, userId);

  const cancelTransitionHandler = async (data: ITransRece) =>
    await cancleTransition(data);

  useEffect(() => {
    if (isPull && userId > 0) getTransitions(userId);
  }, [userId, isPull]);

  return (
    <BlackWindowModal isOpen={isWindowOpen}>
      <ReceivingModalStyle onClick={(e) => e.stopPropagation()}>
        <Title>Receiving Box:</Title>
        <GroupsStore>
          {receivingBox.length < 1 ? (
            <Blank icon={icons.group} title="Groups" />
          ) : (
            receivingBox.map((data, index) => (
              <GroupWrapper key={index}>
                <UserDisplay
                  user={data.from}
                  actionHandlerOne={{
                    action: () => acceptTransitionHandler(data),
                    call: "Accept",
                  }}
                  actionHandlerTwo={{
                    action: () => cancelTransitionHandler(data),
                    call: "Cancel",
                  }}
                />
                <GroupDefault data={data.group} />
              </GroupWrapper>
            ))
          )}
        </GroupsStore>
        <ButtonWrapper>
          <Button name="Cancel" actionHandle={toggleReceivingBoxWindow} />
        </ButtonWrapper>
      </ReceivingModalStyle>
    </BlackWindowModal>
  );
};

export default ReceivingModal;
