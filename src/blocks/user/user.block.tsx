import logo from "../../assets/icon.jpeg";

import { UserStyle, Icon, UsersData, SpanData } from "./user.style";

const UserBlock = () => {
  return (
    <UserStyle>
      <Icon src={logo} />
      <UsersData>
        <SpanData>user-id: 12312421234</SpanData>
        <SpanData>sally@gmail.com</SpanData>
      </UsersData>
    </UserStyle>
  );
};

export default UserBlock;
