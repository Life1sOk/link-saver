import Button from "../../components/button/button.component";
import Linker from "../../components/linker/linker.component";
import BlackWindowModal from "../../shared/black-window/black-window.modal";

import ArchiveItem from "./archive-item/archive-item";

import {
  ArchiveModalStyle,
  ArchiveBottom,
  ArchiveMain,
  Title,
  Message,
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
  const canselHandler = () => console.log("check");

  return (
    <BlackWindowModal isOpen={true}>
      <ArchiveModalStyle>
        <Title>Archive:</Title>
        <ArchiveMain count={Math.ceil(data.length / 3)}>
          {data?.map((link, index) => (
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
          ))}
        </ArchiveMain>
        <Message>
          Deleted links will be stored here for 4 days (96 hours)! To restore, use THIS
          button!
        </Message>
        <ArchiveBottom>
          <Button name="Cancel" actionHandle={canselHandler} />
        </ArchiveBottom>
      </ArchiveModalStyle>
    </BlackWindowModal>
  );
};
export default ArchiveModal;
