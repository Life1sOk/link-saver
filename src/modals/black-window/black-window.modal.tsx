import { BlackWindowStyle } from "./black-window.style";

interface IWindowModal {
  isOpen: boolean;
  children?: string | JSX.Element | JSX.Element[];
  activeHandler?: () => void;
}

const BlackWindowModal = ({
  isOpen,
  children,
  activeHandler,
}: IWindowModal) => {
  if (!isOpen) return <></>;

  return (
    <BlackWindowStyle onClick={activeHandler}>{children}</BlackWindowStyle>
  );
};

export default BlackWindowModal;
