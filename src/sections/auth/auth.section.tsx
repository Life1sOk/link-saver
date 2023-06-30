import { useAppSelector } from "../../App/store/hooks";

import { useAuthLocal } from "../../utils/helper-dispatch/useAuthLocal";

import LoginBlock from "../../blocks/auth/form/login.block";
import RegBlock from "../../blocks/auth/form/registration.block";
import VerifyBlock from "../../blocks/auth/message/verify.block";
import ErrorBlock from "../../blocks/auth/message/error.block";
import ResetBlock from "../../blocks/auth/message/reset.block";
import EmailBlock from "../../blocks/auth/form/email.block";

import { AuthStyle } from "./auth.style";

const AuthSection = () => {
  const currentBlock = useAppSelector((state) => state.auth.sectionState);

  const { toggleSectionStateLocal } = useAuthLocal();

  return (
    <AuthStyle>
      {currentBlock === "login" && <LoginBlock changeBlock={toggleSectionStateLocal} />}
      {currentBlock === "registration" && (
        <RegBlock changeBlock={toggleSectionStateLocal} />
      )}
      {currentBlock === "verify" && <VerifyBlock changeBlock={toggleSectionStateLocal} />}
      {currentBlock === "error" && <ErrorBlock changeBlock={toggleSectionStateLocal} />}
      {currentBlock === "reset" && <ResetBlock changeBlock={toggleSectionStateLocal} />}
      {currentBlock === "email" && <EmailBlock changeBlock={toggleSectionStateLocal} />}
    </AuthStyle>
  );
};

export default AuthSection;
