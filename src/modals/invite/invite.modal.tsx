import { useEffect, useState, ChangeEvent } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleInviteWindow } from "../../App/store/slices/friends.slice";
import { useLazyGetUsersSearchQuery } from "../../App/store/api/user";
import { useInviteUserMutation } from "../../App/store/api/friends";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import Input from "../../components/input/input.component";
import User from "../../components/user/user.components";
import Button from "../../components/button/button.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import BlankModal from "../../shared/blank/blank-section.modal";

import { useDebounce } from "../../utils/helpers/useDebounce";

import { IUser } from "../../utils/interfaces/user";
import {
  InviteModalStyle,
  FindedUsers,
  Title,
  Buttons,
  DefaultAndSpin,
  UserWrapper,
  WrapperWrapper,
} from "./invite.style";

const InviteModal = () => {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.profile.id);
  const isOpen = useAppSelector((state) => state.friends.isInviteWindow);

  const [users, setUsers] = useState<IUser[]>([]);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const [getUsersSearchApi, result] = useLazyGetUsersSearchQuery();
  const [inviteUserApi] = useInviteUserMutation();

  // helpers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const toggleHandler = () => dispatch(toggleInviteWindow());

  // Send invite
  const sendInviteHandler = async (user: IUser) => {
    const message = { from: userId, to: user.id };
    console.log(message);
    await inviteUserApi(message);
  };

  // Run server search
  const getUsersSearchHandler = async () => {
    await getUsersSearchApi({ user: userId, value: debouncedValue })
      .unwrap()
      .then((users) => {
        if (users) setUsers(users);
      });
  };

  useEffect(() => {
    if (isOpen && debouncedValue.length > 0) getUsersSearchHandler();
    if (debouncedValue.length <= 0) setUsers([]);
  }, [debouncedValue]);

  return (
    <BlackWindowModal isOpen={isOpen}>
      <InviteModalStyle onClick={(e) => e.stopPropagation()}>
        <Title>Find user:</Title>
        <Input type="text" label="" placeholder="By user's email" change={handleChange} />
        {users.length < 1 ? (
          <DefaultAndSpin>
            <BlankModal title="users" />
          </DefaultAndSpin>
        ) : result.isFetching || result.isLoading ? (
          <DefaultAndSpin>
            <LoadingSpinner />
          </DefaultAndSpin>
        ) : (
          <FindedUsers>
            {users.map((user, index) => (
              <WrapperWrapper key={index}>
                <UserWrapper>
                  <User username={user.username} email={user.email} />
                </UserWrapper>
                <Button name="invite" actionHandle={() => sendInviteHandler(user)} />
              </WrapperWrapper>
            ))}
          </FindedUsers>
        )}
        <Buttons>
          <Button name="Cancel" actionHandle={toggleHandler} />
        </Buttons>
      </InviteModalStyle>
    </BlackWindowModal>
  );
};

export default InviteModal;
