import { BlackWindowStyle } from "./black-window.style";

interface IWindowModal {
  isOpen: boolean;
  children: string | JSX.Element | JSX.Element[];
}

const BlackWindowModal = ({ isOpen, children }: IWindowModal) => {
  return <>{isOpen && <BlackWindowStyle>{children}</BlackWindowStyle>}</>;
};

export default BlackWindowModal;
