import { useDispatch } from "react-redux";

import {
  usersSessionStore,
  usersSessionStoreByToken,
  toggleSectionState,
  verificationStore,
} from "../../App/store/slices/auth.slice";

import { TSectionState } from "../interfaces/auth";

export const useAuthLocal = () => {
  const dispatch = useDispatch();

  // Session
  const storeSessionLocal = (arg: any) => dispatch(usersSessionStore(arg));
  const storeSessionByTokenLocal = (arg: any) => dispatch(usersSessionStoreByToken(arg));

  // Toggle local
  const toggleSectionStateLocal = (arg: TSectionState) =>
    dispatch(toggleSectionState(arg));

  // Verification
  const verificationStoreLocal = (user: { email: string; username: string }) =>
    dispatch(verificationStore(user));

  return {
    storeSessionLocal,
    storeSessionByTokenLocal,
    toggleSectionStateLocal,
    verificationStoreLocal,
  };
};
