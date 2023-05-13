import { memo } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";

import SettingsBlock from "../../blocks/settings/settings.block";
import ButtonNew from "../../components/button-new/button-new.component";

import { ActionStyle, LocalActions } from "./action.style";

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
      <LocalActions>
        <ButtonNew name="Add topic" actionHandle={openTopicWindow} sectionType="topic" />
        <ButtonNew name="Add group" actionHandle={openGroupWindow} sectionType="group" />
        <ButtonNew name="Add link" actionHandle={openLinkWindow} sectionType="generic" />
      </LocalActions>
      <SettingsBlock />
    </ActionStyle>
  );
});

export default ActionSection;
