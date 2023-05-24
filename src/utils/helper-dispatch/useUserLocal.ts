import { useAppDispatch } from "../../App/store/hooks";

import {
  usersDataStore,
  usersSessionStore,
  usersSessionStoreByToken,
} from "../../App/store/slices/user.slice";

import { IUser } from "../interfaces/user";

export const useUserLocal = () => {
  const dispatch = useAppDispatch();

  const storeProfile = (arg: IUser) => dispatch(usersDataStore(arg));
  const storeSession = (arg: any) => dispatch(usersSessionStore(arg));
  const storeSessionByToken = (arg: any) => dispatch(usersSessionStoreByToken(arg));

  return {
    storeProfile,
    storeSession,
    storeSessionByToken,
  };
};
