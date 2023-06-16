import { useState, useEffect } from "react";

import { useProcessLocal } from "../../utils/helper-dispatch/useProcessLocal";

import { MessageStyle, IconWrapper, Message, Action } from "./message.style";

interface IMessageType {
  icon: any;
  action: string;
  actionHandler: () => void;
  message: string;
}

const MessageType = ({ icon, action, actionHandler, message }: IMessageType) => {
  const [isActive, setIsActive] = useState(true);

  const { addProcessMessage } = useProcessLocal();

  const showActionHandler = () => {
    addProcessMessage(null);
    actionHandler();
  };

  useEffect(() => {
    setTimeout(() => setIsActive(false), 7000);
    setTimeout(() => addProcessMessage(null), 8000);
  }, []);

  return (
    <MessageStyle isActive={isActive}>
      <IconWrapper>{icon}</IconWrapper>
      <Action onClick={showActionHandler}>{action}</Action>
      <Message>{message}</Message>
    </MessageStyle>
  );
};

export default MessageType;
