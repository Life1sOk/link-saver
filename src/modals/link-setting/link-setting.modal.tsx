import { DialogBack, OpenWindow, ActionP } from "./link-setting.style";

interface ILinkSetModal {
  isOpen: boolean;
  closeModel: () => void;
  editLink: () => void;
  deleteLink: () => void;
}

const LinkSettingModal = ({
  isOpen,
  closeModel,
  editLink,
  deleteLink,
}: ILinkSetModal) => {
  return (
    <>
      {isOpen && (
        <>
          <DialogBack onClick={closeModel} isOpen={isOpen} />
          <OpenWindow>
            <ActionP onClick={editLink}>Edit Some</ActionP>
            <ActionP onClick={deleteLink}>Remove</ActionP>
          </OpenWindow>
        </>
      )}
    </>
  );
};

export default LinkSettingModal;
