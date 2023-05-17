import { useState, useEffect, ChangeEvent } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useLazyGetUsersSearchQuery } from "../../App/store/api/user";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";
import { useFriendsLogic } from "../../utils/contollers/useFriendsLogic";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import BlankModal from "../../shared/blank/blank-section.modal";

import UserDisplay from "./user-display/user-display.half";
import Input from "../../components/input/input.component";

import { useDebounce } from "../../utils/helpers/useDebounce";
import { IUser } from "../../utils/interfaces/user";

import {
  SearchBlockStyle,
  FindedUsers,
  DefaultAndSpin,
  Title,
} from "./user-search.style";

const UserSearch = () => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const isOpen = useAppSelector((state) => state.friends.isFriendsWindow);
  const searchResult = useAppSelector((state) => state.friends.searchList);

  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const { addSearchListLocal } = useFriendsLocal();
  const [getUsersSearchApi, result] = useLazyGetUsersSearchQuery();

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
    await getUsersSearchApi({ user: userId, value: debouncedValue })
      .unwrap()
      .then((users) => {
        if (users) addSearchListLocal(users);
      });
  };

  useEffect(() => {
    if (isOpen && debouncedValue.length > 0) getUsersSearchHandler();
    if (debouncedValue.length <= 0) addSearchListLocal([]);
  }, [debouncedValue]);

  return (
    <SearchBlockStyle>
      <Title>Find user:</Title>
      <Input type="text" label="" placeholder="By user's email" change={handleChange} />
      {searchResult.length < 1 ? (
        <DefaultAndSpin>
          <BlankModal title="users" />
        </DefaultAndSpin>
      ) : result.isFetching || result.isLoading ? (
        <DefaultAndSpin>
          <LoadingSpinner />
        </DefaultAndSpin>
      ) : (
        <FindedUsers>
          {searchResult.map((user, index) => (
            <UserDisplay
              key={index}
              user={user}
              actionHandler={() => sendInviteHandler(user)}
            />
          ))}
        </FindedUsers>
      )}
    </SearchBlockStyle>
  );
};

export default UserSearch;
