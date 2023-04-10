import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleLinkWindowHandler } from "../../App/store/slices/action-window.slice";

import { BlackWindow } from "../block.style";
import { LinkAddStyle } from "./link-add.style";

const LinkAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.link);

  const closeLinkWindow = () => dispatch(toggleLinkWindowHandler());

  return (
    <>
      {isOpen && (
        <BlackWindow onClick={closeLinkWindow}>
          <LinkAddStyle>Link add window</LinkAddStyle>
        </BlackWindow>
      )}
    </>
  );
};

export default LinkAddBlock;
