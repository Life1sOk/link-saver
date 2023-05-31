import { useAppSelector } from "../../App/store/hooks";

import UserDisplay from "../../components/user-display/user-display.half";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import { IUserTrans } from "../../utils/interfaces/user";

import { FriendsStyle } from "./friends-wrapper.style";

const UserInvited = () => {
  const invitedList = useAppSelector((state) => state.friends.invitedList);

  const { cancelInviteFriend } = useFriendsLogic();

  const cancelInviteHandler = (user: IUserTrans) => cancelInviteFriend(user);

  return (
    <FriendsStyle>
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
    </FriendsStyle>
  );
};

export default UserInvited;
