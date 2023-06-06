import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useFriendsLocal } from "../helper-dispatch/useFriendsLocal";
import { useBoxLocal } from "../helper-dispatch/useBoxLocal";

export const useConnectSse = () => {
  const userId = useAppSelector((state) => state.user.profile.id);

  const { addOneToListLocal, deleteOneFromListLocal } = useFriendsLocal();
  const { addReceivingLocal } = useBoxLocal();

  const getMessage = async () => {
    const eventSource = new EventSource(`http://localhost:3000/connect/${userId}`);

    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);

      console.log(message, "message");

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

      // "invite friend"
    };
  };

  useEffect(() => {
    if (userId > 0) getMessage();
  }, [userId]);
};
