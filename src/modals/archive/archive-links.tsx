import { useState, useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { useArchiveLogic } from "../../utils/contollers/useArchiveLogic";

import { icons } from "../../utils/react-icons";

import Linker from "../../components/linker/linker.component";
import ArchiveItem from "./archive-item/archive-item";
import Blank from "../../components/blank/blank-section.modal";

import { ArchiveMainLinks } from "./archive.style";

const ArchiveLinks = ({ search }: { search: string }) => {
  const archiveLinks = useAppSelector((state) => state.archive.links);
  const [upData, setUpData] = useState(archiveLinks);

  const { deleteArchive } = useArchiveLogic();

  useEffect(() => {
    const filtered = archiveLinks.filter((item) => item.link_title.includes(search));
    setUpData(filtered);
  }, [search]);

  useEffect(() => setUpData(archiveLinks), [archiveLinks]);

  return (
    <ArchiveMainLinks count={Math.ceil(archiveLinks.length / 3)} type="links">
      {archiveLinks?.length > 0 ? (
        upData?.map((link, index) => (
          <ArchiveItem
            key={index}
            data={link}
            data_type="link"
            actionHandler={deleteArchive}
          >
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
    </ArchiveMainLinks>
  );
};

export default ArchiveLinks;
