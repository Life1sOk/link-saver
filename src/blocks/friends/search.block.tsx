import { useState, useEffect, ChangeEvent } from "react";

import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";
import { useUserLogic } from "../../utils/contollers/useUserLogic";
import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import Blank from "../../components/blank/blank-section.modal";

import UserDisplay from "../../components/user-display/user-display.half";
import Input from "../../components/input/input.component";

import { useDebounce } from "../../utils/helpers/useDebounce";
import { IUser } from "../../utils/interfaces/user";

import { FriendsStyle, SearchBlockStyle, DefaultAndSpin } from "./friends-wrapper.style";

const UserSearch = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const isOpen = useAppSelector((state) => state.friends.isFriendsWindow);
  const searchResult = useAppSelector((state) => state.friends.searchList);

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const { addSearchListLocal } = useFriendsLocal();
  const { getUserSearch, getUserSearchApiResult: result } = useUserLogic();

  const { inviteFriend } = useFriendsLogic();

  // helpers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  // Send invite
  const sendInviteHandler = async (user: IUser) => {
    await inviteFriend(userId, user.id, user);
  };

  // Run server search
  const getUsersSearchHandler = async () => {
    await getUserSearch(userId, debouncedValue);
  };

  useEffect(() => {
    if (isOpen && debouncedValue.length > 0) getUsersSearchHandler();
    if (debouncedValue.length <= 0) addSearchListLocal([]);
  }, [debouncedValue]);

  return (
    <SearchBlockStyle>
      <Input type="text" label="" placeholder="By user's email" change={handleChange} />
      {result.isFetching || result.isLoading ? (
        <DefaultAndSpin>
          <LoadingSpinner />
        </DefaultAndSpin>
      ) : result.data && result.data.length <= 0 ? (
        <DefaultAndSpin>
          <span>No such a users</span>
        </DefaultAndSpin>
      ) : searchResult.length < 1 ? (
        <DefaultAndSpin>
          <Blank title="users" icon={icons.friends} />
        </DefaultAndSpin>
      ) : (
        <FriendsStyle>
          {searchResult.map((user, index) => (
            <UserDisplay
              key={index}
              user={user}
              status="Finded"
              actionHandlerOne={{ action: () => sendInviteHandler(user), call: "Invite" }}
            />
          ))}
        </FriendsStyle>
      )}
    </SearchBlockStyle>
  );
};

export default UserSearch;
