import { useAppSelector } from "../../App/store/hooks";

import UserDisplay from "../../components/user-display/user-display.half";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import { UserFriendsStyle, Line } from "./user-friends.style";

const UserFriends = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const friendsList = useAppSelector((state) => state.friends.friendsList);
  const incomingList = useAppSelector((state) => state.friends.incomingList);

  const { acceptFriend, notAcceptFriend, deleteFriend } = useFriendsLogic();

  const acceptFriendHandler = (user: IUserTrans) => acceptFriend(user);
  const fuckOffHandler = (user: IUserTrans) => notAcceptFriend(user);
  const deleteFriendHandler = (user: IUserTrans) => deleteFriend(user, userId);

  return (
    <UserFriendsStyle>
      {incomingList.map((user, index) => (
        <UserDisplay
          key={index}
          user={user}
          actionHandlerOne={{ action: () => acceptFriendHandler(user), call: "Accept" }}
          actionHandlerTwo={{ action: () => fuckOffHandler(user), call: "Fuck off" }}
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
    </UserFriendsStyle>
  );
};

export default UserFriends;
