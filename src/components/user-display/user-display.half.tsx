import User from "../../shared/user/user.components";

import { IUser, IUserFrom } from "../../utils/interfaces/user";

import {
  WrapperWrapper,
  UserWrapper,
  Actions,
  StatusWrapper,
  Status,
} from "./user-display.style";

interface IuD {
  user: IUser | IUserFrom;
  actionHandlerOne: {
    action: () => void;
    call: "Accept" | "Invite" | "Cancel" | "Delete";
  };
  actionHandlerTwo?: {
    action: () => void;
    call: "Accept" | "Invite" | "Cancel" | "Delete";
  };
  status?: "Friend" | "Invited" | "Finded";
}

const UserDisplay = ({ user, actionHandlerOne, status, actionHandlerTwo }: IuD) => {
  return (
    <WrapperWrapper>
      <UserWrapper>
        <User username={user.username!} email={user.email!} />
      </UserWrapper>
      <StatusWrapper>
        {status && <Status status={status}>{status}</Status>}
        {actionHandlerOne && (
          <Actions onClick={actionHandlerOne.action} type={actionHandlerOne.call}>
            {actionHandlerOne.call}
          </Actions>
        )}
        {actionHandlerTwo && (
          <Actions onClick={actionHandlerTwo.action} type={actionHandlerTwo.call}>
            {actionHandlerTwo.call}
          </Actions>
        )}
      </StatusWrapper>
    </WrapperWrapper>
  );
};

export default UserDisplay;
