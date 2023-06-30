import {
  useLazyGetUsersSearchQuery,
  useUpdateUserNameMutation,
  useUpdateUserPasswordMutation,
  useUpdateUserEmailMutation,
  useUpdateUserPasswordByTokenMutation,
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

interface IUpPasswordToken {
  newPassword: string;
  token: string;
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

  const [updateUserPasswordByTokenApi, updateUserPasswordByTokenApiResult] =
    useUpdateUserPasswordByTokenMutation();

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

  const updatePasswordByToken = async (arg: IUpPasswordToken) => {
    return await updateUserPasswordByTokenApi(arg).unwrap();
  };

  return {
    getUserSearch,
    getUserSearchApiResult,
    updateUserName,
    updateUserEmail,
    updatePassword,
    updatePasswordByToken,
    updatePasswordByTokenResult: updateUserPasswordByTokenApiResult,
  };
};
