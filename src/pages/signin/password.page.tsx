import { useState } from "react";
import { useParams } from "react-router-dom";

import { useUserLogic } from "../../utils/contollers/useUserLogic";
import { useAuthLocal } from "../../utils/helper-dispatch/useAuthLocal";

import PasswordBlock from "../../blocks/auth/form/password.block";
import PasswordMessBlock from "../../blocks/auth/message/password.block";
import ErrorBlock from "../../blocks/auth/message/error.block";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { SigninStyle } from "./signin.style";

const PasswordPage = () => {
  const { token } = useParams();

  const [isDone, setIsDone] = useState(false);

  const { updatePasswordByToken, updatePasswordByTokenResult } = useUserLogic();
  const { toggleSectionStateLocal } = useAuthLocal();

  const sendChangesHandler = async (newPassword: string) => {
    const prepObj = { newPassword, token: token! };

    await updatePasswordByToken(prepObj).then(() => setIsDone(true));
  };

  if (updatePasswordByTokenResult.isLoading)
    return (
      <SigninStyle>
        <LoadingSpinner />
      </SigninStyle>
    );

  if (updatePasswordByTokenResult.isError)
    return (
      <SigninStyle>
        <ErrorBlock changeBlock={toggleSectionStateLocal} />
      </SigninStyle>
    );

  return (
    <SigninStyle>
      {isDone ? (
        <PasswordMessBlock changeBlock={toggleSectionStateLocal} />
      ) : (
        <PasswordBlock actionHandler={sendChangesHandler} />
      )}
    </SigninStyle>
  );
};

export default PasswordPage;
