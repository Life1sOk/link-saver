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
}

const SettingAction = ({ title, icon, mode, actionHandler, type }: ISetting) => {
  return (
    <SettingActionStyle onClick={actionHandler} title={title}>
      <IconWrapper>{icon}</IconWrapper>
      {mode !== "icon-only" && <ActionTitle>{title}</ActionTitle>}
      {type === "modal" && <TriangleDown />}
      {type === "window" && <TriangleUp />}
    </SettingActionStyle>
  );
};

export default SettingAction;
