import { DragDropStyle } from "./drag-drop.style";

interface IDrag {
  group_id?: number;
  link_id?: number;
  data?: any;
  children: string | JSX.Element | JSX.Element[];
}

const Drag = ({ link_id, children }: IDrag) => {
  const onDragStart = (event: React.SyntheticEvent) => {
    console.log(link_id, "started link");
  };

  return (
    <DragDropStyle onDragStart={onDragStart} draggable>
      {children}
    </DragDropStyle>
  );
};

export default Drag;
