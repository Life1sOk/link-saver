import { BlackWindowStyle } from "./black-window.style";

interface IWindowModal {
  isOpen: boolean;
  actionHandler: () => void;
  children: string | JSX.Element | JSX.Element[];
}

const BlackWindowModal = ({
  isOpen,
  actionHandler,
  children,
}: IWindowModal) => {
  return (
    <>
      {isOpen && (
        <BlackWindowStyle onClick={actionHandler}>{children}</BlackWindowStyle>
      )}
    </>
  );
};

export default BlackWindowModal;
