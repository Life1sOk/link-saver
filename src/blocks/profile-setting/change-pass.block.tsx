import { useRef, SyntheticEvent } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useUserLogic } from "../../utils/contollers/useUserLogic";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import {
  ProfileSettingStyle,
  Title,
  ButtonWrapper,
  InputWrapper,
  Line,
} from "./profile-setting.style";

interface ICpass {
  actionCancel: () => void;
}

const ChangePassBlock = ({ actionCancel }: ICpass) => {
  const email = useAppSelector((state) => state.user.profile.email);

  // Refs
  const oldRef = useRef<HTMLInputElement>(null);
  const newRef = useRef<HTMLInputElement>(null);
  const controlRef = useRef<HTMLInputElement>(null);

  const { updatePassword } = useUserLogic();

  const sendChangesSubmitHandler = async (event: SyntheticEvent) => {
    event.preventDefault();

    const currentOld = oldRef.current?.value!;
    const currentNew = newRef.current?.value!;
    const currentControl = controlRef.current?.value!;

    if (currentNew !== currentControl) return alert("new password dont mach!");

    const upPass = {
      email,
      oldPassword: currentOld,
      newPassword: currentNew,
    };

    // Sende to server - check if pass match
    await updatePassword(upPass);

    // Clear
    if (oldRef.current && newRef.current && controlRef.current) {
      oldRef.current.value = "";
      newRef.current.value = "";
      controlRef.current.value = "";
    }

    return actionCancel();
  };

  return (
    <ProfileSettingStyle onSubmit={sendChangesSubmitHandler}>
      <Title>Password</Title>
      <InputWrapper>
        <Input label="Old password" type="password" ref={oldRef} required />
        <Line />
        <Input label="New password" type="password" ref={newRef} required />
        <Input label="Control password" type="password" ref={controlRef} required />
      </InputWrapper>
      <ButtonWrapper>
        <Button name="Cancel" actionHandle={actionCancel} type="button" />
        <Button name="Update password" type="submit" />
      </ButtonWrapper>
    </ProfileSettingStyle>
  );
};

export default ChangePassBlock;
