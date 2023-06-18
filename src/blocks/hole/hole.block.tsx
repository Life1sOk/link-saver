import { useAppSelector } from "../../App/store/hooks";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";
import { useDragLocal } from "../../utils/helper-dispatch/useDragLocal";
import { useArchiveLocal } from "../../utils/helper-dispatch/useArchiveLocal";

import { icons } from "../../utils/react-icons";

import DropWrapper from "../../utils/drag-drop/drop.wrapper";

import { HoleBlockStyle, HoleStyle } from "./hole.style";

const HoleBlock = () => {
  const currentDrag = useAppSelector((state) => state.drag.current);

  const { deleteGenericLink, deleteGroupLink } = useLinkLogic();
  const { removeDraggableLocal } = useDragLocal();
  const { toggleArchiveWindowLocal } = useArchiveLocal();

  const deleteHandler = async () => {
    if (currentDrag.type === "link" && currentDrag.from === "generics") {
      await deleteGenericLink(currentDrag.data);
    }

    if (currentDrag.type === "link" && currentDrag.from !== "generics") {
      await deleteGroupLink(currentDrag.data, currentDrag.from?.group_index!);
    }

    removeDraggableLocal();
  };

  return (
    <HoleStyle>
      <DropWrapper typeFor="link" typeAction="delete" actionHandler={deleteHandler}>
        <HoleBlockStyle onClick={toggleArchiveWindowLocal}>
          {icons.archive}
          Archive
        </HoleBlockStyle>
      </DropWrapper>
    </HoleStyle>
  );
};

export default HoleBlock;
