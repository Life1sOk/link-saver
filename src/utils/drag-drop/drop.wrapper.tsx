import { DragDropStyle } from "./drag-drop.style";

interface IDrop {
  actionHandler: () => void;
  children: string | JSX.Element | JSX.Element[];
}

const DropWrapper = ({ actionHandler, children }: IDrop) => {
  const onDragOver = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const onDropHandler = () => {
    actionHandler();
  };

  return (
    <DragDropStyle onDragOver={onDragOver} onDrop={onDropHandler}>
      {children}
    </DragDropStyle>
  );
};

export default DropWrapper;
