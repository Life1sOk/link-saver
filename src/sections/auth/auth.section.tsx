import { useAppSelector } from "../../App/store/hooks";

import { useAuthLocal } from "../../utils/helper-dispatch/useAuthLocal";

import LoginBlock from "../../blocks/auth/login.block";
import RegBlock from "../../blocks/auth/registration.block";
import VerifyBlock from "../../blocks/auth/verify.block";
import ErrorBlock from "../../blocks/auth/error.block";

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
    </AuthStyle>
  );
};

export default AuthSection;
