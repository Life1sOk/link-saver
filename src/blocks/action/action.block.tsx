import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import {
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
} from "../../App/store/slices/action-window.slice";

import Button from "../../components/button/button.component";

import { ActionStyle } from "./action.style";

const ActionBlock = () => {
  const dispatch = useAppDispatch();
  const activeTopic = useAppSelector(
    (state) => state.activeTopic.current.topic_title
  );

  const openGroupWindow = () => {
    if (activeTopic === "") return alert("pls add some topic 1st");
    dispatch(toggleGroupWindowHandler());
  };
  const openLinkWindow = () => dispatch(toggleLinkWindowHandler());

  return (
    <ActionStyle>
      <Button name="Add new group" actionHandle={openGroupWindow} />
      <Button name="Add new link" actionHandle={openLinkWindow} />
    </ActionStyle>
  );
};

export default ActionBlock;
