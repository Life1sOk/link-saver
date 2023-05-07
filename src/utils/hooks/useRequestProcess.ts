import { useEffect } from "react";

import { useAppDispatch } from "../../App/store/hooks";

import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

interface IProcess {
  data?: any;
  error?: any;
  isUninitialized?: boolean;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  reset?: any;
}

export const useRequestProcess = (result: IProcess) => {
  const dispatch = useAppDispatch();

  const { isLoading, isSuccess, isError } = result;

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");
  }, [isError, isLoading, isSuccess, dispatch]);
};
