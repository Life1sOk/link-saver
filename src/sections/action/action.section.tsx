import { memo } from "react";
import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { useFriendsLocal } from "../../utils/helper-dispatch/useFriendsLocal";
import { useBoxLocal } from "../../utils/helper-dispatch/useBoxLocal";

import HoleBlock from "../../blocks/hole/hole.block";
import AddBlock from "../../blocks/add/add.block";
import CheckWrapper from "../../utils/check-wrapper/check.wrapper";

import SettingAction from "../../components/setting-action/setting-action.component";

import { ActionStyle, LocalActions } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
  const incomingCount = useAppSelector((state) => state.friends.incomingList.length);
  const receivingCount = useAppSelector((state) => state.box.receivingBox.length);

  const { toggleFriendsWindow } = useFriendsLocal();
  const { toggleReceivingBoxWindow } = useBoxLocal();

  return (
    <ActionStyle>
      <LocalActions>
        <AddBlock />
        <CheckWrapper isCheck={receivingCount > 0}>
          <SettingAction
            icon={icons.box}
            title="Receiving box"
            type="window"
            actionHandler={toggleReceivingBoxWindow}
            newCount={receivingCount}
          />
        </CheckWrapper>
        <CheckWrapper isCheck={incomingCount > 0}>
          <SettingAction
            icon={icons.friends}
            title="Friends"
            type="window"
            actionHandler={toggleFriendsWindow}
            newCount={incomingCount}
          />
        </CheckWrapper>
      </LocalActions>
      <HoleBlock />
    </ActionStyle>
  );
});

export default ActionSection;
