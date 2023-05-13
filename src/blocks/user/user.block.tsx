import { useEffect } from "react";

import logo from "../../assets/icon.jpeg";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { usersDataStore } from "../../App/store/slices/user.slice";
import { useGetUsersProfileQuery } from "../../App/store/api/user";

import { UserStyle, Icon, UsersData, SpanName, SpanEmail } from "./user.style";

const UserBlock = () => {
  const dispatch = useAppDispatch();

  const userId = useAppSelector((state) => state.user.session.user_id);
  const user = useAppSelector((state) => state.user.profile);

  const { data } = useGetUsersProfileQuery(userId);

  useEffect(() => {
    if (data) dispatch(usersDataStore(data));
  }, [data, dispatch]);

  return (
    <UserStyle>
      <Icon src={logo} />
      <UsersData>
        <SpanName>{user.username}</SpanName>
        <SpanEmail>{user.email}</SpanEmail>
      </UsersData>
    </UserStyle>
  );
};

export default UserBlock;
