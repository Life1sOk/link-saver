import { GroupActionStyle, IconWrapper } from "./group-action.style";

interface IGroupAction {
  title: string;
  icon: any;
  actionHandler: () => void;
}

const GroupAction = ({ title, icon, actionHandler }: IGroupAction) => {
  return (
    <GroupActionStyle onClick={actionHandler}>
      <IconWrapper>{icon}</IconWrapper>
      <span>{title}</span>
    </GroupActionStyle>
  );
};

export default GroupAction;
