import { useAppDispatch } from "../../App/store/hooks";
import {
  activateGroup,
  deactivateGroup,
} from "../../App/store/slices/action-window.slice";

import { GroupActiveStyle } from "./group-active.style";

interface IGroupActive {
  group_id: number;
  group_index: number;
  title: string;
  isActive: boolean;
}

const GroupActive = ({
  group_id,
  title,
  group_index,
  isActive,
}: IGroupActive) => {
  const dispatch = useAppDispatch();

  const activeGroupHandler = () => {
    if (isActive) return dispatch(deactivateGroup());

    dispatch(activateGroup({ title, id: group_id, group_index }));
  };

  return <GroupActiveStyle onClick={activeGroupHandler} isActive={isActive} />;
};

export default GroupActive;
