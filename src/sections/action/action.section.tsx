import { memo } from "react";
import { icons } from "../../utils/react-icons";

import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";

import SettingsBlock from "../../blocks/settings/settings.block";
import AddBlock from "../../blocks/add/add.block";

import SettingAction from "../../components/setting-action/setting-action.component";

import { ActionStyle, LocalActions } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
  const { toggleFriendsWindow } = useFriendsLocal();

  const toggleSendWindowHandler = () => {};

  return (
    <ActionStyle>
      <LocalActions>
        <AddBlock />
        <SettingAction
          icon={icons.share}
          title="Send"
          type="window"
          actionHandler={toggleSendWindowHandler}
        />
        <SettingAction
          icon={icons.friends}
          title="Friends"
          type="window"
          actionHandler={toggleFriendsWindow}
        />
      </LocalActions>
      <SettingsBlock />
    </ActionStyle>
  );
});

export default ActionSection;
