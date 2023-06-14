import { useDragLocal } from "../helper-dispatch/useDragLocal";

import { IDragWrapper } from "../interfaces/drag";

import { DragStyle } from "./drag-drop.style";

const DragWrapper = ({ type, data, from, children }: IDragWrapper) => {
  const { addDraggableLocal, removeDraggableLocal } = useDragLocal();

  const onDragStart = (event: any) => {
    event.target.style.opacity = ".4";

    if (type === "link") addDraggableLocal({ type: "link", data, from });
    // if (type === "group") addDraggableLocal({ type: "group", data });
  };

  const onDragEnd = (event: any) => {
    event.target.style.opacity = "1";

    if (type === "link") removeDraggableLocal();
  };

  return (
    <DragStyle onDragStart={onDragStart} onDragEnd={onDragEnd} draggable>
      {children}
    </DragStyle>
  );
};

export default DragWrapper;
