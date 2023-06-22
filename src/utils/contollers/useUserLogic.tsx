import {
  useLazyGetUsersSearchQuery,
  useUpdateUserNameMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserEmailMutation,
} from "../../App/store/api/user";

import { useFriendsLocal } from "../helper-dispatch/useFriendsLocal";
import { useUserLocal } from "../helper-dispatch/useUserLocal";

import { useRequestProcess } from "../helpers/useRequestProcess";

interface IUpUsername {
  user_id: number;
  newUsername: string;
}

interface IUpEmail {
  user_id: number;
  newEmail: string;
  oldEmail: string;
}

interface IUpPassword {
  email: string;
  oldPassword: string;
  newPassword: string;
}

export const useUserLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const { addSearchListLocal } = useFriendsLocal();
  const { updateProfileLocal } = useUserLocal();

  // --------------------- SERVER ------------------------ //
  const [getUserSearchApi, getUserSearchApiResult] = useLazyGetUsersSearchQuery();

  const [updateUserNameApi, updateUserNameApiResult] = useUpdateUserNameMutation();
  useRequestProcess(updateUserNameApiResult);

  const [updateUserEmailApi, updateUserEmailApiResult] = useUpdateUserEmailMutation();
  useRequestProcess(updateUserEmailApiResult);

  const [updateUserPasswordApi, updateUserPasswordApiResult] =
    useUpdateUserPasswordMutation();
  useRequestProcess(updateUserPasswordApiResult);

  // --------------------- ACTION ------------------------ //
  const getUserSearch = async (user_id: number, value: string) => {
    return await getUserSearchApi({ user: user_id, value })
      .unwrap()
      .then((users) => {
        if (users) addSearchListLocal(users);
      });
  };

  const updateUserName = async (upObj: IUpUsername, oldUsername: string) => {
    // Local
    updateProfileLocal({ username: upObj.newUsername, email: null });

    // Server
    return await updateUserNameApi(upObj)
      .unwrap()
      .catch((err) => {
        if (err) {
          updateProfileLocal({ username: oldUsername, email: null });
        }
      });
  };

  const updateUserEmail = async (upObj: IUpEmail) => {
    // Local
    updateProfileLocal({ username: null, email: upObj.newEmail });

    // Server
    return await updateUserEmailApi(upObj)
      .unwrap()
      .catch((err) => {
        if (err) {
          updateProfileLocal({ username: null, email: upObj.oldEmail });
        }
      });
  };

  const updatePassword = async (upObj: IUpPassword) => {
    return await updateUserPasswordApi(upObj).unwrap().catch(console.log);
  };

  return {
    getUserSearch,
    getUserSearchApiResult,
    updateUserName,
    updateUserEmail,
    updatePassword,
  };
};
