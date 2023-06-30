import { useParams } from "react-router-dom";

import { useAuthLocal } from "../../utils/helper-dispatch/useAuthLocal";
import { useConfirmUserQuery } from "../../App/store/api/authorisation";

import WelcomeBlock from "../../blocks/auth/message/welcome.block";
import ErrorBlock from "../../blocks/auth/message/error.block";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { SigninStyle } from "./signin.style";

const WelcomePage = () => {
  const { token } = useParams();

  const { toggleSectionStateLocal } = useAuthLocal();

  // console.log(token, "token to send");
  const { isFetching, isLoading, isSuccess } = useConfirmUserQuery(token!);

  return (
    <SigninStyle>
      {isLoading || isFetching ? (
        <LoadingSpinner />
      ) : isSuccess ? (
        <WelcomeBlock changeBlock={toggleSectionStateLocal} />
      ) : (
        <ErrorBlock changeBlock={toggleSectionStateLocal} />
      )}
    </SigninStyle>
  );
};

export default WelcomePage;
