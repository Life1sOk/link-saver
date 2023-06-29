import { useAppDispatch } from "../../App/store/hooks";

import {
  usersDataStore,
  toggleWindow,
  updateProfile,
} from "../../App/store/slices/user.slice";

import { IUser, IUserFrom } from "../interfaces/user";

export const useUserLocal = () => {
  const dispatch = useAppDispatch();

  // Profile
  const storeProfileLocal = (arg: IUser) => dispatch(usersDataStore(arg));
  const updateProfileLocal = (arg: IUserFrom) => dispatch(updateProfile(arg));

  // Toggle
  const toggleProfileWindow = () => dispatch(toggleWindow());

  return {
    storeProfileLocal,
    toggleProfileWindow,
    updateProfileLocal,
  };
};
