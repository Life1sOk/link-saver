import logo from "../../assets/icon.jpeg";

import { UserStyle, Icon, UsersData, SpanName, SpanEmail } from "./user.style";

interface IUser {
  username: string;
  email: string;
}

const User = ({ username, email }: IUser) => {
  return (
    <UserStyle>
      <Icon src={logo} />
      <UsersData>
        <SpanName>{username}</SpanName>
        <SpanEmail>{email}</SpanEmail>
      </UsersData>
    </UserStyle>
  );
};

export default User;
