import { useRef } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import Mark from "../../shared/mark/mark.shared";

import BlackWindowModal from "../../shared/black-window/black-window.modal";
import {
  FormWrapper,
  AddModalStyle,
  ButtonsWrapper,
  TitleBlock,
  ModalHeader,
} from "./add-modals.style";

const LinkAddModal = () => {
  const isOpen = useAppSelector((state) => state.genericsLocal.window.isAddLink);
  const activeLink = useAppSelector((state) => state.genericsLocal.window.activeLink);
  const userId = useAppSelector((state) => state.auth.session.user_id);

  const { toggleLinkWindow } = useGenericLocal();

  const { addLinkGeneric, addLinkGroup, updateLink } = useLinkLogic();

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
    // Add link generic
    await addLinkGeneric(link);
  };

  const addLinkGroupHandler = async (title: string, url: string) => {
    //Prepare object
    const link = {
      id: Date.now(),
      user_id: userId,
      link_title: title,
      group_id: activeLink.fromGroup.group_id,
      link_url: url,
      status: false,
    };
    // Close window
    closeLinkWindow();
    // Add link group
    await addLinkGroup(link, activeLink.fromGroup.index);
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
    // Update
    await updateLink(activeLink.from, updatedLink, oldLink);
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

    // Add group
    if (activeLink.fromGroup.group_id > -1 && activeLink.fromGroup.index > -1) {
      await addLinkGroupHandler(title, url);
      return;
    }

    // Add / update
    if (activeLink.link.id < 0) {
      await addLinkGenericHandler(title, url);
    } else {
      await updateLinkGenericHandler(title, url);
    }

    // Reset inputs
    if (titleRef.current && urlRef.current) {
      titleRef.current.value = "";
      urlRef.current.value = "";
    }
  };

  return (
    <BlackWindowModal isOpen={isOpen}>
      <AddModalStyle>
        <ModalHeader>
          <TitleBlock>Add link</TitleBlock>
          <Mark sectionType="generic" />
        </ModalHeader>
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
          <ButtonsWrapper>
            <Button name="Cancel" type="button" actionHandle={closeLinkWindow} />
            <Button name="Add/Send link" type="submit" />
          </ButtonsWrapper>
        </FormWrapper>
      </AddModalStyle>
    </BlackWindowModal>
  );
};

export default LinkAddModal;
