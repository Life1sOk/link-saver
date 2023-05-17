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
} from "./user-invited.style";

const UserInvited = () => {
  const invitedList = useAppSelector((state) => state.friends.invitedList);

  const { cancelInviteFriend } = useFriendsLogic();

  const cancelInviteHandler = (user: IUserTrans) => cancelInviteFriend(user);
  console.log(invitedList);
  return (
    <UserFriendsStyle>
      {invitedList.length < 1 ? (
        <BlankModal title="invites" />
      ) : (
        invitedList.map((user, index) => (
          <WrapperWrapper key={index}>
            <UserWrapper>
              <User username={user.username} email={user.email} />
            </UserWrapper>
            <Status>
              <Actions onClick={() => cancelInviteHandler(user)}>Cancel</Actions>
            </Status>
          </WrapperWrapper>
        ))
      )}
    </UserFriendsStyle>
  );
};

export default UserInvited;
