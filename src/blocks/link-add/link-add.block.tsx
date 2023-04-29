import { useRef, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleLinkWindowHandler } from "../../App/store/slices/action-window.slice";
import {
  addOneGeneric,
  updateOneGeneric,
} from "../../App/store/slices/generics.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import {
  useAddGenericLinkMutation,
  useChangeLinkTitleOrUrlMutation,
} from "../../App/store/api/links";
import { updateGroupLink } from "../../App/store/slices/groups.slice";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { LinkAddStyle, LinkButtons } from "./link-add.style";

const LinkAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.isAddLink);
  const activeLink = useAppSelector((state) => state.actionWindow.activeLink);
  const userId = useAppSelector((state) => state.user.session.user_id);

  const [addGenericLinkApi, { isError, isLoading, isSuccess }] =
    useAddGenericLinkMutation();
  const [
    updateLinkApi,
    { isError: isUpError, isLoading: isUpLoading, isSuccess: isUpSuccess },
  ] = useChangeLinkTitleOrUrlMutation();

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
      activeLink.link.id > 0 &&
      title === activeLink.link.link_title &&
      url === activeLink.link.link_url
    ) {
      // Close window
      return closeLinkWindow();
    }

    // Normal generic add
    if (activeLink.link.id < 0) {
      //Prepare object
      const link = {
        user_id: userId,
        link_title: title,
        link_url: url,
      };
      // Close window
      closeLinkWindow();
      // Add locally
      dispatch(addOneGeneric({ ...link, status: "0", id: Date.now() }));
      // Send data
      await addGenericLinkApi(link);
      return;
    }

    const updatedLink = {
      id: activeLink.link.id,
      link_title: title,
      link_url: url,
      status: activeLink.link.status,
    };

    // Close window
    closeLinkWindow();
    // Update locally
    if (activeLink.from === "generics") {
      dispatch(updateOneGeneric(updatedLink));
    } else {
      dispatch(
        updateGroupLink({
          index: Number(activeLink.from),
          link_data: updatedLink,
        })
      );
    }

    // If all not much so we should update link
    await updateLinkApi(updatedLink);
    return;
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");

    if (isUpLoading) processStatusHandler("isLoading");
    if (isUpSuccess) processStatusHandler("isSuccess");
    if (isUpError) processStatusHandler("isError");
  }, [
    isError,
    isLoading,
    isSuccess,
    isUpError,
    isUpLoading,
    isUpSuccess,
    dispatch,
  ]);

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
          defaultValue={activeLink.link.link_title}
        />
        <Input
          label="URL:"
          type="text"
          ref={urlRef}
          required
          defaultValue={activeLink.link.link_url}
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
