import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import UserDisplay from "../../components/user-display/user-display.half";
import Blank from "../../components/blank/blank-section.modal";

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
        <Blank title="invites" icon={icons.friends} />
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
