import { useGroupLocal } from "../../../utils/helper-dispatch/useGroupLocal";

import { GroupActiveStyle } from "./group-active.style";

interface IGroupActive {
  group_id: number;
  group_index: number;
  title: string;
  isActive: boolean;
}

const GroupActive = ({ group_id, title, group_index, isActive }: IGroupActive) => {
  const { editGroupWindow, resetGroupWindow } = useGroupLocal();

  const activeGroupHandler = () => {
    if (isActive) return resetGroupWindow();

    editGroupWindow({ title, id: group_id, group_index });
  };

  return <GroupActiveStyle onClick={activeGroupHandler} isActive={isActive} />;
};

export default GroupActive;
