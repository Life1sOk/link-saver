import { SwitcherStyle } from "./switcher.style";
import NewCount from "../../shared/new-count/new-count.shared";

interface ISwitcher {
  actionHandler: () => void;
  isActive: boolean;
  title: string;
  count: number;
  countNew?: number;
}

const Switcher = ({ title, actionHandler, isActive, count, countNew }: ISwitcher) => {
  return (
    <SwitcherStyle onClick={actionHandler} isActive={isActive}>
      {title}
      {` (${count})`}
      <NewCount count={countNew} top={-3} right={-3} />
    </SwitcherStyle>
  );
};

export default Switcher;
