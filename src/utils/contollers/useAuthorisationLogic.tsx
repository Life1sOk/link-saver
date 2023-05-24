import { useNavigate } from "react-router-dom";

import {
  useRegisterMutation,
  useLoginMutation,
  useLoginByTokenMutation,
} from "../../App/store/api/authorisation";

import { useUserLocal } from "../helper-dispatch/useUserLocal";

interface IRegister {
  username: string;
  email: string;
  password: string;
}

interface ILog {
  email: string;
  password: string;
}

export const useAuthorisationLogic = () => {
  const navigate = useNavigate();

  // --------------------- LOCAL ------------------------ //
  const { storeSession, storeSessionByToken } = useUserLocal();

  // --------------------- SERVER ------------------------ //
  const [registerUserApi, registerUserApiResult] = useRegisterMutation();
  const [loginUserApi, loginUserApiResult] = useLoginMutation();
  const [loginTokenUserApi, loginTokenUserApiResult] = useLoginByTokenMutation();

  // --------------------- ACTION ------------------------ //
  const registerUser = async (arg: IRegister) => {
    await registerUserApi(arg)
      .unwrap()
      .then((response) => {
        storeSession(response);
        navigate("/main");
      });
  };

  const loginUser = async (loginObj: ILog) => {
    // User
    await loginUserApi(loginObj)
      .unwrap()
      .then((response) => {
        storeSession(response);
        navigate("/main");
      });
  };

  const loginUserByToken = async (token: string) => {
    await loginTokenUserApi({ token })
      .unwrap()
      .then((response) => {
        storeSessionByToken({ token, response });
        navigate("/main");
      });
  };

  return {
    registerUser,
    registerUserApiResult,
    loginUser,
    loginUserApiResult,
    loginUserByToken,
    loginTokenUserApiResult,
  };
};
