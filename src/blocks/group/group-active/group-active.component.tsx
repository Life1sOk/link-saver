import { icons } from "../../../utils/react-icons";

import { useGroupLocal } from "../../../utils/helper-dispatch/useGroupLocal";

import { IconWrapper } from "./group-active.style";

interface IGroupActive {
  group_id: number;
  group_index: number;
  title: string;
  isActive: boolean;
  isActivate?: boolean;
}

const GroupActive = ({
  group_id,
  title,
  group_index,
  isActive,
  isActivate,
}: IGroupActive) => {
  const { editGroupWindow, resetGroupWindow } = useGroupLocal();

  const activeGroupHandler = () => {
    if (isActivate) {
      if (isActive) return resetGroupWindow();

      editGroupWindow({ title, id: group_id, group_index });
    }
  };

  return (
    <IconWrapper onClick={activeGroupHandler} isActive={isActive}>
      {icons.group}
    </IconWrapper>
  );
};

export default GroupActive;
