import { DialogBack, OpenWindow } from "./other-action.style";

interface IOtherActionModal {
  isOpen: boolean;
  closeModel: () => void;
  children?: string | JSX.Element | JSX.Element[];
}

const OtherActionModal = ({ isOpen, closeModel, children }: IOtherActionModal) => {
  return (
    <>
      {isOpen && (
        <>
          <DialogBack onClick={closeModel} isOpen={isOpen} />
          <OpenWindow>{children}</OpenWindow>
        </>
      )}
    </>
  );
};

export default OtherActionModal;
