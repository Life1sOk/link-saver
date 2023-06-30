import { useNavigate } from "react-router-dom";

import {
  useRegisterMutation,
  useLoginMutation,
  useLoginByTokenMutation,
  useVerificationMutation,
  useResetMutation,
} from "../../App/store/api/authorisation";

// import { useUserLocal } from "../helper-dispatch/useUserLocal";
import { useAuthLocal } from "../helper-dispatch/useAuthLocal";

interface IVerify {
  username: string;
  email: string;
}

interface IConfirme {
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
  const {
    storeSessionLocal,
    storeSessionByTokenLocal,
    toggleSectionStateLocal,
    verificationStoreLocal,
  } = useAuthLocal();

  // --------------------- SERVER ------------------------ //
  const [registerUserApi, registerUserApiResult] = useRegisterMutation();
  const [loginUserApi, loginUserApiResult] = useLoginMutation();
  const [loginTokenUserApi, loginTokenUserApiResult] = useLoginByTokenMutation();
  const [verificationApi] = useVerificationMutation();
  const [resetPasswordApi, resetPasswordApiResult] = useResetMutation();

  // --------------------- ACTION ------------------------ //
  const registerUser = async (arg: IConfirme) => {
    return await registerUserApi(arg)
      .unwrap()
      .then((response) => {
        if (response.emailConf) {
          toggleSectionStateLocal("verify");
          verificationStoreLocal({ username: arg.username, email: arg.email });
        }
      })
      .catch((err) => {
        if (err) {
          toggleSectionStateLocal("error");
        }
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

  const sendVerificationEmail = async (arg: IVerify) => {
    return await verificationApi(arg).unwrap();
  };

  const sendResetPasswordEmail = async (arg: { email: string }) => {
    return await resetPasswordApi(arg).unwrap();
  };

  return {
    registerUser,
    registerUserApiResult,
    loginUser,
    loginUserApiResult,
    loginUserByToken,
    loginTokenUserApiResult,
    sendVerificationEmail,
    sendResetPasswordEmail,
    resetPasswordApiResult,
  };
};
