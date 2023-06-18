import { useAppDispatch } from "../../App/store/hooks";

import { toggleArchiveWindow } from "../../App/store/slices/archive.slice";

export const useArchiveLocal = () => {
  const dispatch = useAppDispatch();

  const toggleArchiveWindowLocal = () => dispatch(toggleArchiveWindow());

  return {
    toggleArchiveWindowLocal,
  };
};
