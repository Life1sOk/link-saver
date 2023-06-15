import { useAppSelector } from "../../App/store/hooks";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";
import { useDragLocal } from "../../utils/helper-dispatch/useDragLocal";

import { icons } from "../../utils/react-icons";

import DropWrapper from "../../utils/drag-drop/drop.wrapper";

import { HoleBlockStyle, HoleStyle } from "./hole.style";

const HoleBlock = () => {
  const currentDrag = useAppSelector((state) => state.drag.current);

  const { deleteGenericLink, deleteGroupLink } = useLinkLogic();
  const { removeDraggableLocal } = useDragLocal();

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
        <HoleBlockStyle>{icons.hole}</HoleBlockStyle>
      </DropWrapper>
    </HoleStyle>
  );
};

export default HoleBlock;
