import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import {
  activateGroup,
  deactivateGroup,
} from "../../App/store/slices/action-window.slice";

import { icons } from "../../utils/react-icons";

import { GroupActiveStyle } from "./group-active.style";

interface IGroupActive {
  group_id: number;
  title: string;
  isActive: boolean;
}

const GroupActive = ({ group_id, title, isActive }: IGroupActive) => {
  const dispatch = useAppDispatch();

  const activeGroupHandler = () => {
    if (isActive) return dispatch(deactivateGroup());

    dispatch(activateGroup({ title, id: group_id }));
  };

  return (
    <GroupActiveStyle onClick={activeGroupHandler} isActive={isActive}>
      {icons.activateForAdd}
    </GroupActiveStyle>
  );
};

export default GroupActive;
