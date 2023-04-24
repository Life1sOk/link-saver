import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import {
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
} from "../../App/store/slices/action-window.slice";

import Button from "../../components/button/button.component";

import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";

import { ActionStyle } from "./action.style";

// Топи логику переместить сюда
const ActionSection = () => {
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
      <TopicsAddBlock />
      <Button name="Add topic" actionHandle={() => {}} />
      <Button name="Add new group" actionHandle={openGroupWindow} />
      <Button name="Add new link" actionHandle={openLinkWindow} />
    </ActionStyle>
  );
};

export default ActionSection;
