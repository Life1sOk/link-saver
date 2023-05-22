import Link from "../../shared/link/link.shared";

import { IGroupGet } from "../../utils/interfaces/group";

import {
  GroupDisplay,
  Title,
  LinksPlace,
  ModalWrapper,
  GroupHeader,
} from "./group-default.style";

const GroupDefault = ({ data }: { data: IGroupGet | null }) => {
  return (
    <GroupDisplay>
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
    </GroupDisplay>
  );
};

export default GroupDefault;
