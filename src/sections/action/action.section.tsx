import { memo } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import {
  toggleGroupWindowHandler,
  toggleLinkWindowHandler,
} from "../../App/store/slices/action-window.slice";

import ButtonNew from "../../components/button-new/button-new.component";

import TopicsAddBlock from "../../blocks/topics-add/topics-add.block";

import { ActionStyle } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
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
      <ButtonNew
        name="Add group"
        actionHandle={openGroupWindow}
        color="#ff7565"
      />
      <ButtonNew
        name="Add link"
        actionHandle={openLinkWindow}
        color="rgb(0, 112, 201)"
      />
    </ActionStyle>
  );
});

export default ActionSection;
