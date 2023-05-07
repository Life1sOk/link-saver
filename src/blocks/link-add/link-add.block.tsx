import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import {
  useAddGenericLinkMutation,
  useChangeLinkTitleOrUrlMutation,
} from "../../App/store/api/links";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import {
  LinkAddStyle,
  FormWrapper,
  GifBlock,
  LinkButtons,
  LeftSide,
  TitleBlock,
} from "./link-add.style";

const LinkAddBlock = () => {
  const isOpen = useAppSelector((state) => state.genericsLocal.window.isAddLink);
  const activeLink = useAppSelector((state) => state.genericsLocal.window.activeLink);
  const userId = useAppSelector((state) => state.user.session.user_id);

  const {
    addOneGenericLocal,
    updateOneGenericLocal,
    updateOneGenericIdLocal,
    deleteOneGenericLocal,
    toggleLinkWindow,
  } = useGenericLocal();
  const { updateGroupLinkLocal } = useGroupLocal();

  const [addGenericLinkApi, addGenericLinkApiResult] = useAddGenericLinkMutation();
  useRequestProcess(addGenericLinkApiResult);

  const [updateLinkApi, updateLinkApiResult] = useChangeLinkTitleOrUrlMutation();
  useRequestProcess(updateLinkApiResult);

  const titleRef = useRef<HTMLInputElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const closeLinkWindow = () => toggleLinkWindow();

  const addLinkGenericHandler = async (title: string, url: string) => {
    //Prepare object
    const link = {
      id: Date.now(),
      user_id: userId,
      link_title: title,
      link_url: url,
      status: false,
    };
    // Close window
    closeLinkWindow();
    // Add locally
    addOneGenericLocal(link);
    // Send data
    await addGenericLinkApi(link)
      .unwrap()
      .then((res) => {
        // Change custom id
        updateOneGenericIdLocal({ oldId: link.id, newId: res });
      })
      .catch((error) => {
        if (error) {
          // revers changes
          deleteOneGenericLocal(link.id);
        }
      });
  };

  const updateLinkGenericHandler = async (title: string, url: string) => {
    //Prepare object
    const updatedLink = {
      id: activeLink.link.id,
      link_title: title,
      link_url: url,
      status: activeLink.link.status,
    };

    const oldLink = activeLink.link;

    // Close window
    closeLinkWindow();
    // Update locally
    if (activeLink.from === "generics") {
      updateOneGenericLocal(updatedLink);
    } else {
      updateGroupLinkLocal({
        index: Number(activeLink.from),
        link_data: updatedLink,
      });
    }

    // If all not much so we should update link
    await updateLinkApi(updatedLink)
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          if (activeLink.from === "generics") {
            updateOneGenericLocal(oldLink);
          } else {
            updateGroupLinkLocal({
              index: Number(activeLink.from),
              link_data: oldLink,
            });
          }
        }
      });
  };

  const upLinkHandler = async (event: React.SyntheticEvent) => {
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

    // Add / update Generics
    if (activeLink.link.id < 0) {
      await addLinkGenericHandler(title, url);
      return;
    } else {
      await updateLinkGenericHandler(title, url);
      return;
    }
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <LinkAddStyle>
        <LeftSide>
          <TitleBlock>Add new link:</TitleBlock>
          <FormWrapper onSubmit={upLinkHandler}>
            <Input
              label="Title"
              type="text"
              ref={titleRef}
              required
              defaultValue={activeLink.link.link_title}
            />
            <Input
              label="Url"
              type="text"
              ref={urlRef}
              required
              defaultValue={activeLink.link.link_url}
            />
            <LinkButtons>
              <Button name="Cancel" type="button" actionHandle={closeLinkWindow} />
              <Button name="Add/Send link" type="submit" />
            </LinkButtons>
          </FormWrapper>
        </LeftSide>
        <GifBlock>
          <h3>Gif</h3>
        </GifBlock>
      </LinkAddStyle>
    </BlackWindowModal>
  );
};

export default LinkAddBlock;
