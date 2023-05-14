import { useRef, useState, useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import {
  useCheckMessageMutation,
  useLazyGetCheckMessageQuery,
} from "../../App/store/api/user";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import { InfoBlockStyle } from "./info.style";

interface Check {
  id: number;
  message: string;
}

const InfoBlock = () => {
  const [messages, setMessages] = useState<Check[]>([]);
  const poolRef = useRef<HTMLInputElement>(null);

  const userId = useAppSelector((state) => state.user.profile.id);

  const [sendMessageApi] = useCheckMessageMutation();
  const [getMessageApi] = useLazyGetCheckMessageQuery();

  const sendMessHandler = async () => {
    let message = poolRef.current?.value!;

    const mess = { id: Date.now(), to: 1, message };
    await sendMessageApi(mess);

    if (poolRef.current) {
      poolRef.current.value = "";
    }
  };

  const getMessage = async (mess: Check[]) => {
    const eventSource = new EventSource(`http://localhost:3000/get-share/${userId}`);

    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);
      console.log(message);
      setMessages((prev) => [message, ...prev]);
    };
  };

  useEffect(() => {
    if (userId > -1) getMessage(messages);
  }, [userId]);

  return (
    <InfoBlockStyle>
      <Input label="pooling" type="text" ref={poolRef} />
      <Button name="send" actionHandle={sendMessHandler} />
      {messages.map((mess, index) => (
        <p key={index}>{mess.message}</p>
      ))}
    </InfoBlockStyle>
  );
};

export default InfoBlock;
