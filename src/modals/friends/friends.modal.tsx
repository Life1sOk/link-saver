import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";

import FriendSwitcher from "../../components/friend-switcher/friend-switcher.component";
import UserFriends from "../../blocks/friends/friends.block";
import UserInvited from "../../blocks/friends/invited.block";
import UserSearch from "../../blocks/friends/search.block";
import BlackWindowModal from "../../shared/black-window/black-window.modal";
import Button from "../../components/button/button.component";

import { FriendsModalStyle, Buttons, Switcher } from "./friends.style";

const InviteModal = () => {
  const isOpen = useAppSelector((state) => state.friends.isFriendsWindow);
  const pull = useAppSelector((state) => state.friends.pull);
  const activeSection = useAppSelector((state) => state.friends.activeSection);
  const userId = useAppSelector((state) => state.user.profile.id);

  // Count
  const friendCount = useAppSelector((state) => state.friends.friendsList.length);
  const invitedCount = useAppSelector((state) => state.friends.invitedList.length);
  const incomingCount = useAppSelector((state) => state.friends.incomingList.length);
  const searchCount = useAppSelector((state) => state.friends.searchList.length);

  const { getAllFriendList } = useFriendsLogic();
  const { toggleActiveList, toggleFriendsWindow } = useFriendsLocal();

  // Helpers
  const toggleHandler = () => toggleFriendsWindow();

  const activeFriends = () => toggleActiveList("friends");
  const activeSearch = () => toggleActiveList("search");
  const activeInvited = () => toggleActiveList("invited");

  useEffect(() => {
    if (pull && userId > 0) getAllFriendList(userId);
  }, [pull, userId]);

  return (
    <BlackWindowModal isOpen={isOpen}>
      <FriendsModalStyle onClick={(e) => e.stopPropagation()}>
        <Switcher>
          <FriendSwitcher
            title="Friends"
            actionHandler={activeFriends}
            isActive={activeSection === "friends"}
            count={friendCount}
            countNew={incomingCount}
          />
          <FriendSwitcher
            title="Invited"
            actionHandler={activeInvited}
            isActive={activeSection === "invited"}
            count={invitedCount}
          />
          <FriendSwitcher
            title="Search"
            actionHandler={activeSearch}
            isActive={activeSection === "search"}
            count={searchCount}
          />
        </Switcher>
        {activeSection === "friends" && <UserFriends />}
        {activeSection === "search" && <UserSearch />}
        {activeSection === "invited" && <UserInvited />}
        <Buttons>
          <Button name="Cancel" actionHandle={toggleHandler} />
        </Buttons>
      </FriendsModalStyle>
    </BlackWindowModal>
  );
};

export default InviteModal;
