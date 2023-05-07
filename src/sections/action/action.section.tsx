import { memo } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useTopicLocal } from "../../utils/hooks/useTopicLocal";

import ButtonNew from "../../components/button-new/button-new.component";

import { ActionStyle } from "./action.style";

// Топи логику переместить сюда
const ActionSection = memo(() => {
  const activeTopic = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.topic_title
  );

  const { toggleLinkWindow } = useGenericLocal();
  const { toggleGroupWindow } = useGroupLocal();
  const { toggleTopicWindow } = useTopicLocal();

  const openGroupWindow = () => {
    if (activeTopic === "") return alert("pls add some topic 1st");
    toggleGroupWindow();
  };
  const openLinkWindow = () => toggleLinkWindow();
  const openTopicWindow = () => toggleTopicWindow();

  return (
    <ActionStyle>
      <ButtonNew
        name="Add topic"
        actionHandle={openTopicWindow}
        color="rgb(247, 184, 79)"
      />
      <ButtonNew name="Add group" actionHandle={openGroupWindow} color="#ff7565" />
      <ButtonNew name="Add link" actionHandle={openLinkWindow} color="rgb(0, 112, 201)" />
    </ActionStyle>
  );
});

export default ActionSection;
