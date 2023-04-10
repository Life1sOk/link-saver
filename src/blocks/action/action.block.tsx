import { useAppDispatch } from "../../App/store/hooks";
import {
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
} from "../../App/store/slices/action-window.slice";

import Button from "../../components/button/button.component";

import { ActionStyle } from "./action.style";

const ActionBlock = () => {
  const dispatch = useAppDispatch();

  const openGroupWindow = () => dispatch(toggleGroupWindowHandler());
  const openLinkWindow = () => dispatch(toggleLinkWindowHandler());

  return (
    <ActionStyle>
      <Button name="Add new group" actionHandle={openGroupWindow} />
      <Button name="Add new link" actionHandle={openLinkWindow} />
    </ActionStyle>
  );
};

export default ActionBlock;
