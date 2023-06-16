import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";

import { icons } from "../../utils/react-icons";

import MessageType from "./message-type";

const MessageModal = () => {
  const messageType = useAppSelector((state) => state.process.message);

  const { toggleFriendsWindow } = useFriendsLocal();
  const { toggleReceivingBoxWindow } = useBoxLocal();

  return (
    <>
      {messageType === "friend" && (
        <MessageType
          icon={icons.friends}
          action="Open friends"
          actionHandler={toggleFriendsWindow}
          message="Incoming User Invitation!"
        />
      )}
      {messageType === "box" && (
        <MessageType
          icon={icons.box}
          action="Open receving box"
          actionHandler={toggleReceivingBoxWindow}
          message="New Receiving Group Invitation!"
        />
      )}
    </>
  );
};

export default MessageModal;
