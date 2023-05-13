import { memo } from "react";

import { icons } from "../../utils/react-icons";

import SettingsBlock from "../../blocks/settings/settings.block";
import AddBlock from "../../blocks/add/add.block";

import SettingAction from "../../components/setting-action/setting-action.component";

import { ActionStyle, LocalActions } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
  return (
    <ActionStyle>
      <LocalActions>
        <AddBlock />
        <SettingAction icon={icons.share} title="Share" type="window" />
        <SettingAction icon={icons.friends} title="Friends" type="window" />
      </LocalActions>
      <SettingsBlock />
    </ActionStyle>
  );
});

export default ActionSection;
