import { BlackWindowStyle, AnimationWrapper } from "./black-window.style";

interface IWindowModal {
  isOpen: boolean;
  children?: string | JSX.Element | JSX.Element[];
  activeHandler?: () => void;
}

const BlackWindowModal = ({ isOpen, children, activeHandler }: IWindowModal) => {
  return (
    <BlackWindowStyle onClick={activeHandler} isOpen={isOpen}>
      <AnimationWrapper>{children}</AnimationWrapper>
    </BlackWindowStyle>
  );
};

export default BlackWindowModal;
