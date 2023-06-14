import { useDragLocal } from "../helper-dispatch/useDragLocal";

import { IDragWrapper } from "../interfaces/drag";

import { DragDropStyle } from "./drag-drop.style";

const DragWrapper = ({ type, data, from, children }: IDragWrapper) => {
  const { addDraggableLocal } = useDragLocal();

  const onDragStart = (event: any) => {
    // setIsActive(true);
    setTimeout(() => {
      event.target.style.opacity = "0";
    }, 0);

    if (type === "link") addDraggableLocal({ type: "link", data, from });
    // if (type === "group") addDraggableLocal({ type: "group", data });
  };

  const onDragEnd = (event: any) => {
    event.target.style.opacity = "1";
  };

  return (
    <DragDropStyle onDragStart={onDragStart} onDragEnd={onDragEnd} draggable>
      {children}
    </DragDropStyle>
  );
};

export default DragWrapper;
