import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLocal } from "../helper-dispatch/useFriendsLocal";
import { useBoxLocal } from "../helper-dispatch/useBoxLocal";

export const useWebsocket = () => {
  const session = useAppSelector((state) => state.user.session);

  const { addOneToListLocal, deleteOneFromListLocal } = useFriendsLocal();
  const { addReceivingLocal } = useBoxLocal();

  const websocketHandler = () => {
    // const socket = new WebSocket("wss://link-saver.herokuapp.com/connect");
    const socket = new WebSocket("ws://localhost:3000/connect");

    const userId = JSON.stringify({ user_id: session.user_id });

    socket.onopen = () => socket.send(userId);
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);

      console.log(message);

      switch (message.type) {
        // Lists: friends, invited, incoming, search
        case "invite friend":
          addOneToListLocal({ which: "incoming", user: message.data });
          break;
        case "confirmed friend":
          deleteOneFromListLocal({ from: "invited", id: message.data.id });
          addOneToListLocal({ which: "friends", user: message.data });
          break;
        case "delete friend":
          deleteOneFromListLocal({ from: "friends", id: message.data.from_id });
          break;
        case "transition box":
          addReceivingLocal(message.data);
          break;
      }
    };

    console.log("connected");

    socket.onclose = (event) => {
      if (event.wasClean) {
        alert(
          `[close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`
        );
      } else {
        // например, сервер убил процесс или сеть недоступна
        // обычно в этом случае event.code 1006
        console.log("connection was closed", event.code);
        setTimeout(websocketHandler, 1000);
      }
    };
  };

  useEffect(() => {
    if (session.success) websocketHandler();
  }, [session.success]);
};
