import User from "../../../components/user/user.components";

import { IUser } from "../../../utils/interfaces/user";

import { WrapperWrapper, UserWrapper, Actions, Status } from "./user-display.style";

interface IuD {
  user: IUser;
  actionHandler: () => void;
}

const UserDisplay = ({ user, actionHandler }: IuD) => {
  return (
    <WrapperWrapper>
      <UserWrapper>
        <User username={user.username} email={user.email} />
      </UserWrapper>
      <Status>
        <Actions onClick={actionHandler}>invite</Actions>
      </Status>
    </WrapperWrapper>
  );
};

export default UserDisplay;
