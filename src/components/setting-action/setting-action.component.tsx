import { SettingActionStyle, ActionTitle, IconWrapper } from "./setting-action.style";

interface ISetting {
  title: string;
  icon?: any;
  actionHandler?: () => void;
}

const SettingAction = ({ title, icon, actionHandler }: ISetting) => {
  return (
    <SettingActionStyle onClick={actionHandler}>
      <IconWrapper>{icon}</IconWrapper>
      <ActionTitle>{title}</ActionTitle>
    </SettingActionStyle>
  );
};

export default SettingAction;
