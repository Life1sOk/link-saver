import { DialogBack } from "./link-up.style";

interface IOtherActionModal {
  isOpen: boolean;
  closeModel: () => void;
  children?: string | JSX.Element | JSX.Element[];
}

const LinkUpModal = ({ isOpen, closeModel, children }: IOtherActionModal) => {
  return (
    <>
      {isOpen && (
        <>
          <DialogBack onClick={closeModel} isOpen={isOpen} />
          {children}
        </>
      )}
    </>
  );
};

export default LinkUpModal;
