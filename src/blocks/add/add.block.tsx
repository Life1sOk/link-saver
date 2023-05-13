import { useState } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useGroupLocal } from "../../utils/helper-dispatch/useGroupLocal";
import { useTopicLocal } from "../../utils/helper-dispatch/useTopicLocal";

import { icons } from "../../utils/react-icons";

import ButtonNew from "../../components/button-new/button-new.component";
import SettingAction from "../../components/setting-action/setting-action.component";

import { AddBlockStyle, DialogBack, OpenWindow } from "./add.style";

// interface IAddBlock {
//   isOpen: boolean;
//   closeModel: () => void;
//   children?: string | JSX.Element | JSX.Element[];
// }

const AddBlock = () => {
  const activeTopic = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.topic_title
  );

  const [isOpen, setIsOpen] = useState(false);

  const { toggleLinkWindow } = useGenericLocal();
  const { toggleGroupWindow } = useGroupLocal();
  const { toggleTopicWindow } = useTopicLocal();

  const openModalHandler = () => setIsOpen(true);
  const closeModalHandler = () => setIsOpen(false);

  const openGroupWindow = () => {
    if (activeTopic === "") return alert("pls add some topic 1st");
    toggleGroupWindow();
  };
  const openLinkWindow = () => toggleLinkWindow();
  const openTopicWindow = () => toggleTopicWindow();

  return (
    <AddBlockStyle>
      <SettingAction
        title="Add"
        type="modal"
        actionHandler={openModalHandler}
        icon={icons.marker}
      />
      {isOpen && (
        <>
          <DialogBack isOpen={isOpen} onClick={closeModalHandler}></DialogBack>
          <OpenWindow onClick={closeModalHandler}>
            <ButtonNew name="topic" actionHandle={openTopicWindow} sectionType="topic" />
            <ButtonNew name="group" actionHandle={openGroupWindow} sectionType="group" />
            <ButtonNew name="link" actionHandle={openLinkWindow} sectionType="generic" />
          </OpenWindow>
        </>
      )}
    </AddBlockStyle>
  );
};

export default AddBlock;
