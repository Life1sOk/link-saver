import { useState, useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import Linker from "../../components/linker/linker.component";
import ArchiveItem from "./archive-item/archive-item";
import Blank from "../../components/blank/blank-section.modal";

import { ArchiveMain } from "./archive.style";

const ArchiveLinks = ({ search }: { search: string }) => {
  const archiveLinks = useAppSelector((state) => state.archive.links);
  const [upData, setUpData] = useState(archiveLinks);

  useEffect(() => {
    const filtered = archiveLinks.filter((item) => item.link_title.includes(search));
    setUpData(filtered);
  }, [search]);

  useEffect(() => {
    setUpData(archiveLinks);
  }, [archiveLinks]);

  return (
    <ArchiveMain count={Math.ceil(archiveLinks.length / 3)}>
      {archiveLinks?.length > 0 ? (
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
  );
};

export default ArchiveLinks;
