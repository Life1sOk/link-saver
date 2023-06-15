import { useAppSelector } from "../../App/store/hooks";

import { DropStyle } from "./drag-drop.style";

interface IDrop {
  typeFor: "link" | "group";
  typeAction?: "delete" | "add";
  actionHandler: () => void;
  children: string | JSX.Element | JSX.Element[];
}

const DropWrapper = ({ typeFor, typeAction, actionHandler, children }: IDrop) => {
  const currentType = useAppSelector((state) => state.drag.current.type);

  const onDragOver = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  const onDropHandler = () => {
    actionHandler();
  };

  return (
    <DropStyle
      onDragOver={onDragOver}
      onDrop={onDropHandler}
      isShow={typeFor === currentType}
      typeAction={typeAction}
    >
      {children}
    </DropStyle>
  );
};

export default DropWrapper;
