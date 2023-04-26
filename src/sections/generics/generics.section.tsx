import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { localGenericsStore } from "../../App/store/slices/generics.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";
import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";
import TitleSection from "../../components/title-section/title-section.component";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { LinksWrapper, GenericsWrapper } from "./generics.style";

const GenericsSection = () => {
  const dispatch = useAppDispatch();

  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLinks.data);

  const { data } = useGetGenericLinksByUserIdQuery(userId);
  const [changeGroupLink] = useChangeLinkGroupTitleMutation();

  const [
    ,
    { isError: isUpError, isLoading: isUpLoading, isSuccess: isUpSuccess },
  ] = useChangeLinkStatusMutation();

  const changeGroupLinkHandler = (link_id: number) =>
    changeGroupLink({ id: link_id, group_id: activeGroup.id });

  useEffect(() => {
    if (data) dispatch(localGenericsStore(data));
  }, [data, dispatch]);

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isUpLoading) processStatusHandler("isLoading");
    if (isUpSuccess) processStatusHandler("isSuccess");
    if (isUpError) processStatusHandler("isError");
  }, [isUpError, isUpLoading, isUpSuccess, dispatch]);

  return (
    <GenericsWrapper>
      <LinkAddBlock />
      <TitleSection title="Generic links:" />
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
    </GenericsWrapper>
  );
};

export default GenericsSection;
