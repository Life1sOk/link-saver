import { useState, useEffect } from "react";

import { useProcessLocal } from "../../utils/helper-dispatch/useProcessLocal";

import { MessageStyle, IconWrapper, Message, Action } from "./message.style";

interface IMessageType {
  icon: any;
  action: string;
  message: string;
}

const MessageType = ({ icon, action, message }: IMessageType) => {
  const [isActive, setIsActive] = useState(true);

  const { addProcessMessage } = useProcessLocal();

  useEffect(() => {
    setTimeout(() => setIsActive(false), 3000);

    setTimeout(() => addProcessMessage(null), 4000);
  }, []);

  return (
    <MessageStyle isActive={isActive}>
      <IconWrapper>{icon}</IconWrapper>
      <Action>{action}</Action>
      <Message>{message}</Message>
    </MessageStyle>
  );
};

export default MessageType;
