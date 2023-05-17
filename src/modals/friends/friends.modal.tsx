import { useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";

import { useGetFriendListsQuery } from "../../App/store/api/friends";

import UserSearch from "../../blocks/user-search/user-search.block";
import UserFriends from "../../blocks/user-friends/user-friends.block";
import UserInvited from "../../blocks/user-invited/user-invited.block";
import BlackWindowModal from "../../shared/black-window/black-window.modal";
import Button from "../../components/button/button.component";

import { FriendsModalStyle, Buttons, Changer, Picked } from "./friends.style";

const InviteModal = () => {
  const isOpen = useAppSelector((state) => state.friends.isFriendsWindow);
  const pull = useAppSelector((state) => state.friends.pull);
  const activeSection = useAppSelector((state) => state.friends.activeSection);
  const userId = useAppSelector((state) => state.user.profile.id);

  const { data } = useGetFriendListsQuery(userId);
  const { toggleActiveList, toggleFriendsWindow, addAllListsLocal } = useFriendsLocal();

  // Helpers
  const toggleHandler = () => toggleFriendsWindow();

  const activeFriends = () => toggleActiveList("friends");
  const activeSearch = () => toggleActiveList("search");
  const activeInvited = () => toggleActiveList("invited");

  useEffect(() => {
    if (data && pull) addAllListsLocal(data);
  }, [data, pull]);

  return (
    <BlackWindowModal isOpen={isOpen}>
      <FriendsModalStyle onClick={(e) => e.stopPropagation()}>
        <Changer>
          <Picked onClick={activeFriends} picked={activeSection === "friends"}>
            Friends
          </Picked>
          <Picked onClick={activeInvited} picked={activeSection === "invited"}>
            Invited
          </Picked>
          <Picked onClick={activeSearch} picked={activeSection === "search"}>
            Search
          </Picked>
        </Changer>
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
