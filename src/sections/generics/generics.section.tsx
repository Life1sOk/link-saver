import { useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { GenericsStyle, LinksWrapper } from "./generics.style";

const GenericsSection = () => {
  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);
  const userId = useAppSelector((state) => state.user.data.id);

  const { data } = useGetGenericLinksByUserIdQuery(userId);
  const [changeGroupLink] = useChangeLinkGroupTitleMutation();

  const changeGroupLinkHandler = (link_id: number) =>
    changeGroupLink({ id: link_id, group_id: activeGroup.id });

  return (
    <>
      <LinkAddBlock />
      <GenericsStyle>
        <h1>Generic Links</h1>
        <LinksWrapper>
          {data?.map((current) => (
            <DotsLinkModal
              data={current}
              key={current.id}
              isActive={activeGroup.isActive}
              arrowActionHandler={changeGroupLinkHandler}
            >
              <Link data={current} />
            </DotsLinkModal>
          ))}
        </LinksWrapper>
      </GenericsStyle>
    </>
  );
};

export default GenericsSection;
