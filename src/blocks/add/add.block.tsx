import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";

import ButtonNew from "../../components/button-new/button-new.component";

import { AddBlockStyle } from "./add.style";

const AddBlock = () => {
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
    <AddBlockStyle>
      <ButtonNew name="add topic" actionHandle={openTopicWindow} sectionType="topic" />
      <ButtonNew name="add group" actionHandle={openGroupWindow} sectionType="group" />
      <ButtonNew name="add link" actionHandle={openLinkWindow} sectionType="generic" />
    </AddBlockStyle>
  );
};

export default AddBlock;
