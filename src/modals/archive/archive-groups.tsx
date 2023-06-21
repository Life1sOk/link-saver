import { useState, useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import GroupDefault from "../../blocks/group/group.default";
import ArchiveItem from "./archive-item/archive-item";
import Blank from "../../components/blank/blank-section.modal";

import { ArchiveMainGroups } from "./archive.style";

const ArchiveGroups = ({ search }: { search: string }) => {
  const archiveGroups = useAppSelector((state) => state.archive.groups);
  const [upData, setUpData] = useState(archiveGroups);

  useEffect(() => {
    const filtered = archiveGroups.filter((item) =>
      item.group.group_title.includes(search)
    );
    setUpData(filtered);
  }, [search]);

  useEffect(() => setUpData(archiveGroups), [archiveGroups]);
  console.log(upData);
  return (
    <ArchiveMainGroups>
      {archiveGroups?.length > 0 ? (
        upData?.map((data, index) => (
          <ArchiveItem key={index} data={data.group} data_type="group">
            <GroupDefault data={data.group} />
          </ArchiveItem>
        ))
      ) : (
        <Blank title="groups" icon={icons.group} />
      )}
    </ArchiveMainGroups>
  );
};

export default ArchiveGroups;
