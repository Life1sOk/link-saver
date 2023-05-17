import { useAppSelector } from "../../App/store/hooks";

import User from "../../components/user/user.components";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import {
  UserFriendsStyle,
  UserWrapper,
  WrapperWrapper,
  Status,
  Actions,
  Line,
} from "./user-friends.style";

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
        <WrapperWrapper key={index}>
          <UserWrapper>
            <User username={user.username} email={user.email} />
          </UserWrapper>
          <Status>
            <Actions onClick={() => acceptFriendHandler(user)}>Accept</Actions>
            <Actions onClick={() => fuckOffHandler(user)}>Fuck off</Actions>
          </Status>
        </WrapperWrapper>
      ))}
      {incomingList.length > 0 && <Line />}
      {friendsList.length < 1 ? (
        <BlankModal title="friends" />
      ) : (
        friendsList.map((user, index) => (
          <WrapperWrapper key={index}>
            <UserWrapper>
              <User username={user.username} email={user.email} />
            </UserWrapper>
            <Status>
              <Actions>Friends</Actions>
              <Actions onClick={() => deleteFriendHandler(user)}>Delete</Actions>
            </Status>
          </WrapperWrapper>
        ))
      )}
    </UserFriendsStyle>
  );
};

export default UserFriends;
