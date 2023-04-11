import { icons } from "../../utils/react-icons";

import { GroupStyle, GroupHeader, Title } from "./group.style";

const GroupBlock = ({ title }: { title: string }) => {
  return (
    <GroupStyle>
      <GroupHeader>
        <Title>{title}</Title>
        {icons.dots}
      </GroupHeader>
    </GroupStyle>
  );
};

export default GroupBlock;
