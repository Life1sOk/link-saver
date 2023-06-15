import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import MessageType from "./message-type";

const MessageModal = () => {
  const messageType = useAppSelector((state) => state.process.message);

  return (
    <>
      {messageType === "friend" && (
        <MessageType
          icon={icons.friends}
          action="Open friends"
          message="Incoming User Invitation!"
        />
      )}
      {messageType === "box" && (
        <MessageType
          icon={icons.box}
          action="Open receving box"
          message="New Receiving Group Invitation!"
        />
      )}
    </>
  );
};

export default MessageModal;
