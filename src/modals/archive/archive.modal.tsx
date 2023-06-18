import { useState, useEffect, ChangeEvent } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useArchiveLocal } from "../../utils/helper-dispatch/useArchiveLocal";

import { useDebounce } from "../../utils/helpers/useDebounce";
import { icons } from "../../utils/react-icons";

import Blank from "../../components/blank/blank-section.modal";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import Linker from "../../components/linker/linker.component";
import BlackWindowModal from "../../shared/black-window/black-window.modal";

import ArchiveItem from "./archive-item/archive-item";

import {
  ArchiveHeader,
  ArchiveModalStyle,
  ArchiveBottom,
  ArchiveMain,
  InputWrapper,
  Title,
  IconWrapper,
  Message,
  ArchiveIcon,
} from "./archive.style";

const data = [
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
  { id: 1, link_title: "chek", link_url: "https://www.youtube.com/", status: false },
  { id: 3, link_title: "chek 3", link_url: "https://www.youtube.com/", status: false },
];

const ArchiveModal = () => {
  const [upData, setUpData] = useState(data);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const isOpenWindow = useAppSelector((state) => state.archive.isWindowOpen);
  const { toggleArchiveWindowLocal } = useArchiveLocal();

  // helpers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const filtered = data.filter((item) => item.link_title.includes(debouncedValue));
    setUpData(filtered);
  }, [debouncedValue]);

  return (
    <BlackWindowModal isOpen={isOpenWindow}>
      <ArchiveModalStyle>
        <ArchiveHeader>
          <ArchiveIcon>{icons.archive}</ArchiveIcon>
          <Title>Archive</Title>
          <InputWrapper>
            <IconWrapper>{icons.search}</IconWrapper>
            <Input type="text" label="" placeholder="Find link" change={handleChange} />
          </InputWrapper>
        </ArchiveHeader>
        <ArchiveMain count={Math.ceil(data.length / 3)}>
          {upData.length > 0 ? (
            upData?.map((link, index) => (
              <ArchiveItem key={index} date={new Date()}>
                <Linker
                  data={link}
                  isActive={false}
                  position={"generics"}
                  deleteLink={() => {}}
                  linkTransitionHandler={() => {}}
                  isDraggable={false}
                  isOptions={false}
                  isStatus={false}
                />
              </ArchiveItem>
            ))
          ) : (
            <Blank title="links" icon={icons.link} />
          )}
        </ArchiveMain>
        <Message>
          Deleted links will be stored here for 4 days (96 hours)! To restore, click{" "}
          {icons.restore}!
        </Message>
        <ArchiveBottom>
          <Button name="Cancel" actionHandle={toggleArchiveWindowLocal} />
        </ArchiveBottom>
      </ArchiveModalStyle>
    </BlackWindowModal>
  );
};
export default ArchiveModal;
