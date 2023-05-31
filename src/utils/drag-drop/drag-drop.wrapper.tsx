import { DragDropStyle } from "./drag-drop.style";

interface IDragDrop {
  children: string | JSX.Element | JSX.Element[];
}

const DragDrop = ({ children }: IDragDrop) => {
  const onDragStartHandler = () => console.log("on drag");
  const onDragOverHander = () => console.log("drag over");
  const onDragHandler = () => console.log("drag");
  const onDragEndHandler = () => console.log("drag emd");

  return (
    <DragDropStyle onDragStart={onDragStartHandler} draggable>
      {children}
    </DragDropStyle>
  );
};

export default DragDrop;
