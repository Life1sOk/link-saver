import { useDragLocal } from "../helper-dispatch/useDragLocal";

import { IDragWrapper } from "../interfaces/drag";
import omg from "../../assets/drag-link.webp";

import { DragStyle } from "./drag-drop.style";

const DragWrapper = ({ type, data, from, children, isDraggable }: IDragWrapper) => {
  const { addDraggableLocal, removeDraggableLocal } = useDragLocal();

  const img = new Image();
  img.src = omg;

  const onDragStart = (event: any) => {
    setTimeout(() => {
      event.target.style.opacity = ".4";
    }, 0);

    event.dataTransfer.setDragImage(img, 16, 22);

    if (type === "link") addDraggableLocal({ type: "link", data, from });
  };

  const onDragEnd = (event: any) => {
    event.target.style.opacity = "1";

    if (type === "link") removeDraggableLocal();
  };

  return (
    <DragStyle onDragStart={onDragStart} onDragEnd={onDragEnd} draggable={isDraggable}>
      {children}
    </DragStyle>
  );
};

export default DragWrapper;
