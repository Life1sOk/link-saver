import { useDragLocal } from "../helper-dispatch/useDragLocal";

import { IDragWrapper } from "../interfaces/drag";

import { DragDropStyle } from "./drag-drop.style";

const DragWrapper = ({ type, data, from, children }: IDragWrapper) => {
  const { addDraggableLocal } = useDragLocal();

  const onDragStart = (event: React.SyntheticEvent) => {
    if (type === "link") addDraggableLocal({ type: "link", data, from });
    // if (type === "group") addDraggableLocal({ type: "group", data });
  };

  return (
    <DragDropStyle onDragStart={onDragStart} draggable>
      {children}
    </DragDropStyle>
  );
};

export default DragWrapper;
