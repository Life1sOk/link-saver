import { useId } from "react";
import { useAppSelector } from "../../App/store/hooks";
import { useTransitionLogic } from "../../utils/contollers/useTransitionLogic";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";

import BlackWindowModal from "../../shared/black-window/black-window.modal";

import User from "../../shared/user/user.components";
import Button from "../../components/button/button.component";
import GroupDefault from "../../blocks/group/group.default";

import {
  GroupSendModalStyle,
  GroupBlock,
  LeftSide,
  ButtonWrapper,
  FriendsWrapper,
  Friend,
} from "./group-send.style";

const GroupSendModal = () => {
  const uniqueId = useId();
  const isOpen = useAppSelector((state) => state.box.isSendWindow);
  const prepareBox = useAppSelector((state) => state.box.prepare);
  const myFriends = useAppSelector((state) => state.friends.friendsList);
  const pickedFriend = useAppSelector((state) => state.box.sendFor);
  const userId = useAppSelector((state) => state.user.profile.id);

  const { addTransition } = useTransitionLogic();
  const { toggleSendGroupWindow, addSendForLocal } = useBoxLocal();

  const pickFriendSendForHandler = (arg: number) => addSendForLocal(arg);
  const sendTransitionHandler = async () => {
    let prepObject = {
      from: userId,
      to: pickedFriend!,
      data: prepareBox!,
    };

    await addTransition(prepObject);
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <GroupSendModalStyle>
        <LeftSide>
          <h3>To friend:</h3>
          <FriendsWrapper>
            {myFriends.map((friend, index) => (
              <Friend
                key={uniqueId + index}
                onClick={() => pickFriendSendForHandler(friend.id)}
                isPicked={pickedFriend === friend.id}
              >
                <User username={friend.username} email={friend.email} />
              </Friend>
            ))}
          </FriendsWrapper>
        </LeftSide>
        <GroupBlock>
          <h3>Sending group:</h3>
          {prepareBox !== null && <GroupDefault data={prepareBox!} />}
          <ButtonWrapper>
            <Button name="Cancel" actionHandle={toggleSendGroupWindow} />
            <Button name="Send =>" actionHandle={sendTransitionHandler} />
          </ButtonWrapper>
        </GroupBlock>
      </GroupSendModalStyle>
    </BlackWindowModal>
  );
};

export default GroupSendModal;
