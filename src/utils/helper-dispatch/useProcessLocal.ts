import { useAppDispatch } from "../../App/store/hooks";

import { processMessage } from "../../App/store/slices/process.slice";

export const useProcessLocal = () => {
  const dispatch = useAppDispatch();

  const addProcessMessage = (arg: string | null) => dispatch(processMessage(arg));

  return {
    addProcessMessage,
  };
};
