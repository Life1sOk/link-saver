import { useState, useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import GroupDefault from "../../blocks/group/group.default";
import ArchiveItem from "./archive-item/archive-item";
import Blank from "../../components/blank/blank-section.modal";

import { ArchiveMain } from "./archive.style";

const ArchiveGroups = ({ search }: { search: string }) => {
  const archiveGroups = useAppSelector((state) => state.archive.groups);
  const [upData, setUpData] = useState(archiveGroups);

  useEffect(() => {
    const filtered = archiveGroups.filter((item) => item.group_title.includes(search));
    setUpData(filtered);
  }, [search]);

  useEffect(() => {
    setUpData(archiveGroups);
  }, [archiveGroups]);

  return (
    <ArchiveMain count={Math.ceil(archiveGroups.length / 2)}>
      {archiveGroups?.length > 0 ? (
        upData?.map((group, index) => (
          <ArchiveItem key={index} date={new Date()}>
            <GroupDefault data={group} />
          </ArchiveItem>
        ))
      ) : (
        <Blank title="groups" icon={icons.group} />
      )}
    </ArchiveMain>
  );
};

export default ArchiveGroups;
