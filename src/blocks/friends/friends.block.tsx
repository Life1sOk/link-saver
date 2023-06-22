import { useId } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import UserDisplay from "../../components/user-display/user-display.half";
import Blank from "../../components/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import { FriendsStyle, Line, UsersWrapper } from "./friends-wrapper.style";

const UserFriends = () => {
  const uniqueId = useId();
  const userId = useAppSelector((state) => state.user.profile.id);
  const friendsList = useAppSelector((state) => state.friends.friendsList);
  const incomingList = useAppSelector((state) => state.friends.incomingList);

  const { acceptFriend, notAcceptFriend, deleteFriend } = useFriendsLogic();

  const acceptFriendHandler = (user: IUserTrans) => acceptFriend(user);
  const cancelHandler = (user: IUserTrans) => notAcceptFriend(user);
  const deleteFriendHandler = (user: IUserTrans) => deleteFriend(user, userId);

  return (
    <FriendsStyle>
      <UsersWrapper>
        {incomingList.map((user, index) => (
          <UserDisplay
            key={uniqueId + index}
            user={user}
            actionHandlerOne={{ action: () => acceptFriendHandler(user), call: "Accept" }}
            actionHandlerTwo={{ action: () => cancelHandler(user), call: "Cancel" }}
          />
        ))}
      </UsersWrapper>
      {incomingList.length > 0 && <Line />}
      {friendsList.length < 1 ? (
        <Blank title="friends" icon={icons.friends} />
      ) : (
        <UsersWrapper>
          {friendsList.map((user, index) => (
            <UserDisplay
              key={uniqueId + index}
              user={user}
              status="Friend"
              actionHandlerOne={{
                action: () => deleteFriendHandler(user),
                call: "Delete",
              }}
            />
          ))}
        </UsersWrapper>
      )}
    </FriendsStyle>
  );
};

export default UserFriends;
