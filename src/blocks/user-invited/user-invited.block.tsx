import { useAppSelector } from "../../App/store/hooks";

import UserDisplay from "../../components/user-display/user-display.half";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import { UserFriendsStyle } from "./user-invited.style";

const UserInvited = () => {
  const invitedList = useAppSelector((state) => state.friends.invitedList);

  const { cancelInviteFriend } = useFriendsLogic();

  const cancelInviteHandler = (user: IUserTrans) => cancelInviteFriend(user);

  return (
    <UserFriendsStyle>
      {invitedList.length < 1 ? (
        <BlankModal title="invites" />
      ) : (
        invitedList.map((user, index) => (
          <UserDisplay
            key={index}
            user={user}
            status="Invited"
            actionHandlerOne={{ action: () => cancelInviteHandler(user), call: "Cancel" }}
          />
        ))
      )}
    </UserFriendsStyle>
  );
};

export default UserInvited;
