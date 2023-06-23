import { useId, useState } from "react";

import Linker from "../../components/linker/linker.component";
import GroupActive from "./group-active/group-active.component";
import GroupTitle from "./group-title/group-title.component";
import Status from "./group-status/status.component";

import { IGroupGet } from "../../utils/interfaces/group";
import { IShortLink } from "../../utils/interfaces/link";

import { GroupStyle, GroupHeader, GroupHeaderTop, LinksPlace } from "./group.style";

const GroupDefault = ({ data }: { data: IGroupGet }) => {
  const uniqueId = useId();
  const [upLinks, setUpLinks] = useState<IShortLink[]>(data.links);

  // Filter links
  const filterLinks = (active: "done" | "regular" | "total") => {
    // done, total, regular
    if (active === "done") setUpLinks(data.links.filter((link) => link.status === true));
    if (active === "regular")
      setUpLinks(data.links.filter((link) => link.status !== true));
    if (active === "total") sortLinks();
  };

  // Sort by status
  const sortLinks = () => {
    if (data.links) {
      const copyLinks = [...data.links];
      copyLinks.sort((a, b) => Number(a.status) - Number(b.status));
      setUpLinks(copyLinks);
    }
  };

  return (
    <GroupStyle>
      <Status array={data.links!} actionHandler={filterLinks} />
      <GroupHeader>
        <GroupHeaderTop>
          <GroupActive
            title={data.group_title}
            group_id={data.id}
            isActive={false}
            group_index={0}
            isActivate={false}
          />
          <GroupTitle title={data.group_title} group_id={data.id} isActive={false} />
        </GroupHeaderTop>
      </GroupHeader>
      <LinksPlace>
        {upLinks?.map((link, index) => (
          <Linker
            key={uniqueId + index}
            data={link}
            isActive={false}
            position={"generics"}
            deleteLink={() => {}}
            linkTransitionHandler={() => {}}
            isDraggable={false}
            isOptions={false}
            isStatus={false}
          />
        ))}
      </LinksPlace>
    </GroupStyle>
  );
};

export default GroupDefault;
