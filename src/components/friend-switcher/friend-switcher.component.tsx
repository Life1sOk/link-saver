import { FriendSwitcherStyle } from "./friend-switcher.style";
import NewCount from "../../shared/new-count/new-count.shared";

interface IFriendSwitcher {
  actionHandler: () => void;
  isActive: boolean;
  title: string;
  count: number;
  countNew?: number;
}

const FriendSwitcher = ({
  title,
  actionHandler,
  isActive,
  count,
  countNew,
}: IFriendSwitcher) => {
  return (
    <FriendSwitcherStyle onClick={actionHandler} isActive={isActive}>
      {title}
      {` (${count})`}
      <NewCount count={countNew} top={-3} right={-3} />
    </FriendSwitcherStyle>
  );
};

export default FriendSwitcher;
