import { useAppSelector } from "../../App/store/hooks";

import { useLinkLogic } from "../../utils/contollers/useLinkLogic";
import { useArchiveLogic } from "../../utils/contollers/useArchiveLogic";

import { useDragLocal } from "../../utils/helper-dispatch/useDragLocal";
import { useArchiveLocal } from "../../utils/helper-dispatch/useArchiveLocal";

import { icons } from "../../utils/react-icons";

import SectionCount from "../../shared/section-count/section-count.shared";
import DropWrapper from "../../utils/drag-drop/drop.wrapper";

import { HoleBlockStyle, HoleStyle } from "./hole.style";

const HoleBlock = () => {
  const currentDrag = useAppSelector((state) => state.drag.current);
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const isPull = useAppSelector((state) => state.archive.pull);

  const archiveLinkCount = useAppSelector((state) => state.archive.links.length);
  const archiveGroupCount = useAppSelector((state) => state.archive.groups.length);

  const { deleteGenericLink, deleteGroupLink } = useLinkLogic();
  const { getArchive } = useArchiveLogic();

  const { removeDraggableLocal } = useDragLocal();
  const { toggleArchiveWindowLocal } = useArchiveLocal();

  const deleteHandler = async () => {
    if (currentDrag.type === "link" && currentDrag.from === "generics") {
      await deleteGenericLink(currentDrag.data, user_id);
    }

    if (currentDrag.type === "link" && currentDrag.from !== "generics") {
      await deleteGroupLink(currentDrag.data, currentDrag.from?.group_index!, user_id);
    }

    removeDraggableLocal();
  };

  const check = () => {
    toggleArchiveWindowLocal();
    if (isPull) getArchive(user_id);
  };

  return (
    <HoleStyle>
      <DropWrapper typeFor="link" typeAction="delete" actionHandler={deleteHandler}>
        <HoleBlockStyle onClick={check}>
          {icons.archive}
          Archive
          <SectionCount count={archiveLinkCount} sectionType="generic" />
          <SectionCount count={archiveGroupCount} sectionType="group" />
        </HoleBlockStyle>
      </DropWrapper>
    </HoleStyle>
  );
};

export default HoleBlock;
