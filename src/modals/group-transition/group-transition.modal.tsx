import { GroupTransitionModalStyle } from "./group-transition.style";

interface ITransMod {
  children?: string | JSX.Element | JSX.Element[];
}

const GroupTransitionModal = ({ children }: ITransMod) => {
  return <GroupTransitionModalStyle>{children}</GroupTransitionModalStyle>;
};

export default GroupTransitionModal;
