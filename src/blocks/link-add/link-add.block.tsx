import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleLinkWindowHandler } from "../../App/store/slices/action-window.slice";

import {
  useAddGenericLinkMutation,
  useChangeLinkTitleOrUrlMutation,
} from "../../App/store/api/links";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { LinkAddStyle, LinkButtons } from "./link-add.style";

const LinkAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.isAddLink);
  const activeLink = useAppSelector((state) => state.actionWindow.activeLink);
  const userId = useAppSelector((state) => state.user.session.user_id);

  const [addGenericLinkApi] = useAddGenericLinkMutation();
  const [updateLinkApi] = useChangeLinkTitleOrUrlMutation();

  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);

  const closeLinkWindow = () => dispatch(toggleLinkWindowHandler());

  const addLinkHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    // Take values from inputs
    let title = titleRef.current?.value!;
    let url = urlRef.current?.value!;
    // Check if they fields
    if (url.length < 2 || title.length < 2) return alert("pls field all");
    if (!url.includes("https://")) return alert("its not a URL");

    // Check if data was uppdated if old data === current => just close window
    if (
      activeLink.id > 0 &&
      title === activeLink.link_title &&
      url === activeLink.link_url
    ) {
      // Close window
      return closeLinkWindow();
    }
    // Normal generic add
    if (activeLink.id < 0) {
      //Prepare object
      const link = {
        user_id: userId,
        link_title: title,
        link_url: url,
      };
      // Send data
      await addGenericLinkApi(link);
      // Close window
      return closeLinkWindow();
    }

    // If all not much so we should update link
    await updateLinkApi({
      id: activeLink.id,
      link_title: title,
      link_url: url,
    });

    return closeLinkWindow();
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <LinkAddStyle
        onSubmit={addLinkHandler}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>Add new link:</h1>
        <Input
          label="Title:"
          type="text"
          ref={titleRef}
          required
          defaultValue={activeLink.link_title}
        />
        <Input
          label="URL:"
          type="text"
          ref={urlRef}
          required
          defaultValue={activeLink.link_url}
        />
        <LinkButtons>
          <Button name="Cancel" type="button" actionHandle={closeLinkWindow} />
          <Button name="Add/Send link" type="submit" />
        </LinkButtons>
      </LinkAddStyle>
    </BlackWindowModal>
  );
};

export default LinkAddBlock;
