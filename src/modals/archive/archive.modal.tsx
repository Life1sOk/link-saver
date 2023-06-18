import { useState, ChangeEvent } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useArchiveLocal } from "../../utils/helper-dispatch/useArchiveLocal";

import { useDebounce } from "../../utils/helpers/useDebounce";
import { icons } from "../../utils/react-icons";

import Switcher from "../../components/switcher/switcher.component";
import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";
import BlackWindowModal from "../../shared/black-window/black-window.modal";

import ArchiveLinks from "./archive-links";
import ArchiveGroups from "./archive-groups";

import {
  ArchiveHeader,
  ArchiveModalStyle,
  ArchiveBottom,
  InputWrapper,
  Title,
  IconWrapper,
  Message,
  ArchiveIcon,
  SwitcherWrapper,
} from "./archive.style";

const ArchiveModal = () => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);

  const isOpenWindow = useAppSelector((state) => state.archive.isWindowOpen);
  const activeArchive = useAppSelector((state) => state.archive.activeArchive);
  const linksCount = useAppSelector((state) => state.archive.links.length);
  const groupsCount = useAppSelector((state) => state.archive.groups.length);
  const { toggleArchiveWindowLocal, toggleActiveArchiveLocal } = useArchiveLocal();

  // helpers
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <BlackWindowModal isOpen={isOpenWindow}>
      <ArchiveModalStyle>
        <ArchiveHeader>
          <ArchiveIcon>
            {icons.archive}
            <Title>Archive</Title>
          </ArchiveIcon>
          <SwitcherWrapper>
            <Switcher
              title="Links"
              actionHandler={() => toggleActiveArchiveLocal("links")}
              isActive={activeArchive === "links"}
              count={linksCount}
            />
            <Switcher
              title="Groups"
              actionHandler={() => toggleActiveArchiveLocal("groups")}
              isActive={activeArchive === "groups"}
              count={groupsCount}
            />
          </SwitcherWrapper>
          <InputWrapper>
            <IconWrapper>{icons.search}</IconWrapper>
            <Input type="text" label="" placeholder="Find link" change={handleChange} />
          </InputWrapper>
        </ArchiveHeader>
        {activeArchive === "links" && <ArchiveLinks search={debouncedValue} />}
        {activeArchive === "groups" && <ArchiveGroups search={debouncedValue} />}
        <Message>
          Deleted links and groups will be stored here for 4 days (96 hours)! To restore,
          click {icons.restore}!
        </Message>
        <ArchiveBottom>
          <Button name="Cancel" actionHandle={toggleArchiveWindowLocal} />
        </ArchiveBottom>
      </ArchiveModalStyle>
    </BlackWindowModal>
  );
};
export default ArchiveModal;
