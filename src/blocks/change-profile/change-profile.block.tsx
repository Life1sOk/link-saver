import { useRef, SyntheticEvent } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useUserLogic } from "../../utils/contollers/useUserLogic";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import { replaceSpaceHelper } from "../../utils/helpers/replaceSpace";

import {
  ChangeProfileStyle,
  Title,
  ButtonWrapper,
  InputWrapper,
} from "./change-profile.style";

interface ICprof {
  actionCancel: () => void;
}

const ChangeProfileBlock = ({ actionCancel }: ICprof) => {
  const userId = useAppSelector((state) => state.user.profile.id);
  const { email, username } = useAppSelector((state) => state.user.profile);

  const { updateUserEmail, updateUserName } = useUserLogic();

  // Ref
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const sendChangesSubmitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();

    const currentUsername = replaceSpaceHelper(usernameRef.current?.value!);
    const currentEmail = replaceSpaceHelper(emailRef.current?.value!);

    // Check
    const usernameCheck = currentUsername === username;
    const emailCheck = currentEmail === email;

    if (!usernameCheck)
      await updateUserName({ user_id: userId, newUsername: currentUsername }, username);
    if (!emailCheck)
      await updateUserEmail({
        user_id: userId,
        newEmail: currentEmail,
        oldEmail: email,
      });

    if (usernameRef.current && emailRef.current) {
      usernameRef.current.value = currentUsername;
      emailRef.current.value = currentEmail;
    }

    return actionCancel();
  };

  const cancelChanges = () => {
    if (usernameRef.current && emailRef.current) {
      usernameRef.current.value = username;
      emailRef.current.value = email;
    }

    return actionCancel();
  };

  return (
    <ChangeProfileStyle onSubmit={sendChangesSubmitHandler}>
      <Title>Profile</Title>
      <InputWrapper>
        <Input label="Username" type="text" defaultValue={username} ref={usernameRef} />
        <Input label="Email" type="text" defaultValue={email} ref={emailRef} />
      </InputWrapper>
      <ButtonWrapper>
        <Button name="Cancel" actionHandle={cancelChanges} type="button" />
        <Button name="Update profile" type="submit" />
      </ButtonWrapper>
    </ChangeProfileStyle>
  );
};

export default ChangeProfileBlock;
