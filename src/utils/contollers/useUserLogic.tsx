import { useLazyGetUsersSearchQuery } from "../../App/store/api/user";

import { useFriendsLocal } from "../helper-dispatch/useFriendsLocal";

export const useUserLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const { addSearchListLocal } = useFriendsLocal();

  // --------------------- SERVER ------------------------ //
  const [getUserSearchApi, getUserSearchApiResult] = useLazyGetUsersSearchQuery();

  // --------------------- ACTION ------------------------ //
  const getUserSearch = async (user_id: number, value: string) => {
    await getUserSearchApi({ user: user_id, value })
      .unwrap()
      .then((users) => {
        if (users) addSearchListLocal(users);
      });
  };

  return {
    getUserSearch,
    getUserSearchApiResult,
  };
};
