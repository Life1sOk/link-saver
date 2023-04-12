import { useRef } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleLinkWindowHandler } from "../../App/store/slices/action-window.slice";

import { useAddGenericLinkMutation } from "../../App/store/api/links";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import { BlackWindow } from "../block.style";
import { LinkAddStyle, LinkButtons } from "./link-add.style";

const LinkAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.link);

  const [addGenericLinkApi, result] = useAddGenericLinkMutation();

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

    //Prepare object
    const link = {
      user_id: 17,
      link_title: title,
      link_url: url,
    };
    // Send data
    await addGenericLinkApi(link);
    // Close window
    closeLinkWindow();
  };

  return (
    <>
      {isOpen && (
        <>
          <BlackWindow onClick={closeLinkWindow} />
          <LinkAddStyle onSubmit={addLinkHandler}>
            <h1>Add new link:</h1>
            <Input label="Title:" type="text" ref={titleRef} required />
            <Input label="URL:" type="text" ref={urlRef} required />
            <LinkButtons>
              <Button name="Add/Send link" type="submit" />
            </LinkButtons>
          </LinkAddStyle>
        </>
      )}
    </>
  );
};

export default LinkAddBlock;
