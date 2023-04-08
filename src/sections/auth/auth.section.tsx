import { useState } from "react";

import LoginBlock from "../../blocks/login/login.block";
import RegistrationBlock from "../../blocks/registration/registration.block";

import { AuthStyle } from "./auth.style";

const AuthSection = () => {
  const [currentBlock, setCurrentBlock] = useState("login");

  const changeBlockHandler = (block: string): void => setCurrentBlock(block);

  return (
    <AuthStyle>
      {currentBlock === "login" ? (
        <LoginBlock changeBlock={changeBlockHandler} />
      ) : null}
      {currentBlock === "registration" ? (
        <RegistrationBlock changeBlock={changeBlockHandler} />
      ) : null}
    </AuthStyle>
  );
};

export default AuthSection;
