import { useState } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useUserLocal } from "../../utils/helper-dispatch/useUserLocal";

import User from "../../shared/user/user.components";
import ChangePassBlock from "../../blocks/profile-setting/change-pass.block";
import ChangeProfileBlock from "../../blocks/profile-setting/change-profile.block";
import BlackWindowModal from "../../shared/black-window/black-window.modal";

import { ProfileStyle, LeftSide, UserWrapper, ActionSection } from "./profile.style";

const ProfileModal = () => {
  const [activeSection, setActiveSection] = useState<string>("Profile");

  const isOpen = useAppSelector((state) => state.user.isProfileWindow);
  const { username, email } = useAppSelector((state) => state.user.profile);

  const { toggleProfileWindow } = useUserLocal();
  const closeWindowHandler = () => {
    toggleProfileWindow();
    setActiveSection("Profile");
  };

  const activeProfileHandler = () => setActiveSection("Profile");
  const activePasswordHandler = () => setActiveSection("Password");

  return (
    <BlackWindowModal isOpen={isOpen}>
      <ProfileStyle>
        <LeftSide>
          <UserWrapper>
            <User username={username} email={email} />
          </UserWrapper>
          <ActionSection
            isActive={activeSection === "Profile"}
            onClick={activeProfileHandler}
          >
            Update profile
          </ActionSection>
          <ActionSection
            isActive={activeSection === "Password"}
            onClick={activePasswordHandler}
          >
            Update password
          </ActionSection>
        </LeftSide>
        {activeSection === "Profile" ? (
          <ChangeProfileBlock actionCancel={closeWindowHandler} />
        ) : activeSection === "Password" ? (
          <ChangePassBlock actionCancel={closeWindowHandler} />
        ) : null}
      </ProfileStyle>
    </BlackWindowModal>
  );
};

export default ProfileModal;
