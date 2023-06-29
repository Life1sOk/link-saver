import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useGetUserProfileQuery } from "../../App/store/api/user";

import { useUserLocal } from "../../utils/helper-dispatch/useUserLocal";

import User from "../../shared/user/user.components";

import { UserMainStyle, TriangleUp } from "./user-main.style";

const UserMain = () => {
  const userId = useAppSelector((state) => state.auth.session.user_id);
  const { email, username } = useAppSelector((state) => state.user.profile);

  const { storeProfileLocal, toggleProfileWindow } = useUserLocal();

  const { data } = useGetUserProfileQuery(userId);

  useEffect(() => {
    if (data) storeProfileLocal(data);
  }, [data]);

  return (
    <UserMainStyle onClick={toggleProfileWindow}>
      <User username={username} email={email} />
      <TriangleUp />
    </UserMainStyle>
  );
};

export default UserMain;
