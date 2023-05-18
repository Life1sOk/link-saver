import NewCount from "../../shared/new-count/new-count.shared";

import {
  SettingActionStyle,
  ActionTitle,
  IconWrapper,
  TriangleDown,
  TriangleUp,
} from "./setting-action.style";

interface ISetting {
  title: string;
  icon?: any;
  mode?: string;
  type?: string;
  actionHandler?: () => void;
  newCount?: number;
}

const SettingAction = ({
  title,
  icon,
  mode,
  actionHandler,
  type,
  newCount,
}: ISetting) => {
  return (
    <SettingActionStyle onClick={actionHandler} title={title}>
      <IconWrapper>{icon}</IconWrapper>
      {mode !== "icon-only" && <ActionTitle>{title}</ActionTitle>}
      {type === "modal" && <TriangleDown />}
      {type === "window" && <TriangleUp />}
      <NewCount count={newCount} top={-7} right={-5} />
    </SettingActionStyle>
  );
};

export default SettingAction;
