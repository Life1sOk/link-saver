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
  const { storeSessionLocal, storeSessionByTokenLocal } = useUserLocal();

  // --------------------- SERVER ------------------------ //
  const [registerUserApi, registerUserApiResult] = useRegisterMutation();
  const [loginUserApi, loginUserApiResult] = useLoginMutation();
  const [loginTokenUserApi, loginTokenUserApiResult] = useLoginByTokenMutation();

  // --------------------- ACTION ------------------------ //
  const registerUser = async (arg: IRegister) => {
    return await registerUserApi(arg)
      .unwrap()
      .then((response) => {
        storeSessionLocal(response);
        navigate("/main");
      });
  };

  const loginUser = async (loginObj: ILog) => {
    // User
    return await loginUserApi(loginObj)
      .unwrap()
      .then((response) => {
        storeSessionLocal(response);
        navigate("/main");
      });
  };

  const loginUserByToken = async (token: string) => {
    return await loginTokenUserApi({ token })
      .unwrap()
      .then((response) => {
        storeSessionByTokenLocal({ token, response });
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