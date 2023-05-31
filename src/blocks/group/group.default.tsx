import Link from "../../shared/link/link.shared";

import { IGroupGet } from "../../utils/interfaces/group";

import { GroupStyle, GroupHeader, LinksPlace, Title, ModalWrapper } from "./group.style";

const GroupDefault = ({ data }: { data: IGroupGet | null }) => {
  return (
    <GroupStyle>
      <GroupHeader>
        <Title>{data?.group_title}</Title>
      </GroupHeader>
      <LinksPlace>
        {data?.links.map((link) => (
          <ModalWrapper key={link.id}>
            <Link data={link} />
          </ModalWrapper>
        ))}
      </LinksPlace>
    </GroupStyle>
  );
};

export default GroupDefault;
