import { DragDropStyle } from "./drag-drop.style";

interface IDragDrop {
  children: string | JSX.Element | JSX.Element[];
}

const DragDrop = ({ children }: IDragDrop) => {
  const onDragHandler = () => console.log("on drag");

  return (
    <DragDropStyle onDragStart={onDragHandler} draggable>
      {children}
    </DragDropStyle>
  );
};

export default DragDrop;
