import { useId } from "react";
import Link from "../../shared/link/link.shared";

import { IGroupGet } from "../../utils/interfaces/group";

import { GroupStyle, GroupHeader, LinksPlace, Title, ModalWrapper } from "./group.style";

const GroupDefault = ({ data }: { data: IGroupGet | null }) => {
  const uniqueId = useId();

  return (
    <GroupStyle>
      <GroupHeader>
        <Title>{data?.group_title}</Title>
      </GroupHeader>
      <LinksPlace>
        {data?.links.map((link, index) => (
          <ModalWrapper key={uniqueId + index}>
            <Link data={link} />
          </ModalWrapper>
        ))}
      </LinksPlace>
    </GroupStyle>
  );
};

export default GroupDefault;
