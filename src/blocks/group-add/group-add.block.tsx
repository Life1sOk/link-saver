import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleGroupWindowHandler } from "../../App/store/slices/action-window.slice";

import { BlackWindow } from "../block.style";
import { GroupAddStyle } from "./group-add.style";

const GroupAddBlock = () => {
  const dispatch = useAppDispatch();

  const isOpen = useAppSelector((state) => state.actionWindow.group);

  const closeGroupWindow = () => dispatch(toggleGroupWindowHandler());

  return (
    <>
      {isOpen && (
        <BlackWindow onClick={closeGroupWindow}>
          <GroupAddStyle>Group window</GroupAddStyle>
        </BlackWindow>
      )}
    </>
  );
};

export default GroupAddBlock;
