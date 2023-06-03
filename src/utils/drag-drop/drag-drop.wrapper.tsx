import { DragDropStyle } from "./drag-drop.style";
import { useGenericLocal } from "../helper-dispatch/useGenericLocal";

interface IDragDrop {
  children: string | JSX.Element | JSX.Element[];
}

const DragDrop = ({ children }: IDragDrop) => {
  const onDragOvertHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <DragDropStyle onDragOver={onDragOvertHandler} draggable>
      {children}
    </DragDropStyle>
  );
};

export default DragDrop;
