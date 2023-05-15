import { memo } from "react";
import { icons } from "../../utils/react-icons";

import { useAppDispatch } from "../../App/store/hooks";
import {
  toggleSendWindow,
  toggleInviteWindow,
} from "../../App/store/slices/friends.slice";

import SettingsBlock from "../../blocks/settings/settings.block";
import AddBlock from "../../blocks/add/add.block";

import SettingAction from "../../components/setting-action/setting-action.component";

import { ActionStyle, LocalActions } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
  const dispatch = useAppDispatch();

  const toggleSendWindowHandler = () => dispatch(toggleSendWindow());
  const toggleInviteWindowHandler = () => dispatch(toggleInviteWindow());

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
          title="Invite"
          type="window"
          actionHandler={toggleInviteWindowHandler}
        />
      </LocalActions>
      <SettingsBlock />
    </ActionStyle>
  );
});

export default ActionSection;
