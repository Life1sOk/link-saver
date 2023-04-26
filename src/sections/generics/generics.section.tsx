import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { localGenericsStore } from "../../App/store/slices/generics.slice";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { GenericsStyle, LinksWrapper, GenericsWrapper } from "./generics.style";

const GenericsSection = () => {
  const dispatch = useAppDispatch();

  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLinks.data);

  const { data, isSuccess } = useGetGenericLinksByUserIdQuery(userId);
  const [changeGroupLink] = useChangeLinkGroupTitleMutation();

  const changeGroupLinkHandler = (link_id: number) =>
    changeGroupLink({ id: link_id, group_id: activeGroup.id });

  useEffect(() => {
    if (data) dispatch(localGenericsStore(data));
  }, [data]);

  return (
    <GenericsWrapper>
      <LinkAddBlock />
      <GenericsStyle>
        <LinksWrapper>
          {localGenericLinks.map((current, index) => (
            <DotsLinkModal
              data={current}
              key={index}
              isActive={activeGroup.isActive}
              arrowActionHandler={changeGroupLinkHandler}
            >
              <Link data={current} />
            </DotsLinkModal>
          ))}
        </LinksWrapper>
      </GenericsStyle>
    </GenericsWrapper>
  );
};

export default GenericsSection;
