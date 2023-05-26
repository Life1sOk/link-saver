import { useAppDispatch } from "../../App/store/hooks";

import {
  usersDataStore,
  usersSessionStore,
  usersSessionStoreByToken,
  toggleWindow,
  updateProfile,
} from "../../App/store/slices/user.slice";

import { IUser, IUserFrom } from "../interfaces/user";

export const useUserLocal = () => {
  const dispatch = useAppDispatch();

  // Session
  const storeSessionLocal = (arg: any) => dispatch(usersSessionStore(arg));
  const storeSessionByTokenLocal = (arg: any) => dispatch(usersSessionStoreByToken(arg));

  // Profile
  const storeProfileLocal = (arg: IUser) => dispatch(usersDataStore(arg));
  const updateProfileLocal = (arg: IUserFrom) => dispatch(updateProfile(arg));

  // Toggle
  const toggleProfileWindow = () => dispatch(toggleWindow());

  return {
    storeProfileLocal,
    storeSessionLocal,
    storeSessionByTokenLocal,
    toggleProfileWindow,
    updateProfileLocal,
  };
};
