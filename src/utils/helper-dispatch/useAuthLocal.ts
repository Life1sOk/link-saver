import { useDispatch } from "react-redux";

import {
  usersSessionStore,
  usersSessionStoreByToken,
  toggleSectionState,
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

  return {
    storeSessionLocal,
    storeSessionByTokenLocal,
    toggleSectionStateLocal,
  };
};
