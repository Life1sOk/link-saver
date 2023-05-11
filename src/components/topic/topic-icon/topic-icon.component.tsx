import { icons } from "../../../utils/react-icons";

import { Icon, Count } from "./topic-icon.style";

const TopicIcon = ({ count }: { count: number }) => {
  return (
    <Icon>
      <Count>{count}</Count>
      {icons.topicOpen}
    </Icon>
  );
};

export default TopicIcon;
