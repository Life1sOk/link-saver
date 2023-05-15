import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";

export const useConnectSse = () => {
  const userId = useAppSelector((state) => state.user.profile.id);

  const getMessage = async () => {
    const eventSource = new EventSource(`http://localhost:3000/connect/${userId}`);

    eventSource.onmessage = function (event) {
      const message = JSON.parse(event.data);

      console.log(message, "message");
    };
  };

  useEffect(() => {
    if (userId > -1) getMessage();
  }, [userId]);
};
