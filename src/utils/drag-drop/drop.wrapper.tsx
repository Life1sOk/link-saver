import { useAppSelector } from "../../App/store/hooks";

import { DropStyle } from "./drag-drop.style";

interface IDrop {
  typeFor: "link" | "group";
  actionHandler: () => void;
  children: string | JSX.Element | JSX.Element[];
}

const DropWrapper = ({ typeFor, actionHandler, children }: IDrop) => {
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
    >
      {children}
    </DropStyle>
  );
};

export default DropWrapper;
