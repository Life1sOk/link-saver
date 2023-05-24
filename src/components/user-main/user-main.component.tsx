import { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { usersDataStore } from "../../App/store/slices/user.slice";
import { useGetUserProfileQuery } from "../../App/store/api/user";

import User from "../../shared/user/user.components";

import { UserMainStyle, TriangleUp } from "./user-main.style";

const UserMain = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.session.user_id);
  const { email, username } = useAppSelector((state) => state.user.profile);

  const { data } = useGetUserProfileQuery(userId);

  useEffect(() => {
    if (data) dispatch(usersDataStore(data));
  }, [data, dispatch]);

  return (
    <UserMainStyle>
      <User username={username} email={email} />
      <TriangleUp />
    </UserMainStyle>
  );
};

export default UserMain;
