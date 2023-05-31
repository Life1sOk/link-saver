import { useAppSelector } from "../../App/store/hooks";

import UserDisplay from "../../components/user-display/user-display.half";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import { FriendsStyle, Line } from "./friends-wrapper.style";

const UserFriends = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const friendsList = useAppSelector((state) => state.friends.friendsList);
  const incomingList = useAppSelector((state) => state.friends.incomingList);

  const { acceptFriend, notAcceptFriend, deleteFriend } = useFriendsLogic();

  const acceptFriendHandler = (user: IUserTrans) => acceptFriend(user);
  const cancelHandler = (user: IUserTrans) => notAcceptFriend(user);
  const deleteFriendHandler = (user: IUserTrans) => deleteFriend(user, userId);

  return (
    <FriendsStyle>
      {incomingList.map((user, index) => (
        <UserDisplay
          key={index}
          user={user}
          actionHandlerOne={{ action: () => acceptFriendHandler(user), call: "Accept" }}
          actionHandlerTwo={{ action: () => cancelHandler(user), call: "Cancel" }}
        />
      ))}
      {incomingList.length > 0 && <Line />}
      {friendsList.length < 1 ? (
        <BlankModal title="friends" />
      ) : (
        friendsList.map((user, index) => (
          <UserDisplay
            key={index}
            user={user}
            status="Friend"
            actionHandlerOne={{ action: () => deleteFriendHandler(user), call: "Delete" }}
          />
        ))
      )}
    </FriendsStyle>
  );
};

export default UserFriends;
