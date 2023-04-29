import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { localGenericsStore } from "../../App/store/slices/generics.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";
import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import { addCurrentLink } from "../../App/store/slices/groups.slice";
import { deleteOneGeneric } from "../../App/store/slices/generics.slice";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";
import TitleSection from "../../components/title-section/title-section.component";

import { IShortLink } from "../../interfaces/link";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { LinksWrapper, GenericsWrapper } from "./generics.style";

const GenericsSection = () => {
  const dispatch = useAppDispatch();

  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLocal.data);

  const { data } = useGetGenericLinksByUserIdQuery(userId);
  const [changeGroupLink, { isError, isLoading, isSuccess }] =
    useChangeLinkGroupTitleMutation();

  const [
    ,
    { isError: isUpError, isLoading: isUpLoading, isSuccess: isUpSuccess },
  ] = useChangeLinkStatusMutation();

  // Need local change
  const changeGroupLinkHandler = async (data: IShortLink) => {
    // Local change - generic remove
    dispatch(deleteOneGeneric(data.id));
    // Local change - group add link
    dispatch(
      addCurrentLink({ link_data: data, index: activeGroup.group_index })
    );
    // Server changes
    await changeGroupLink({ id: data?.id, group_id: activeGroup.id });
  };

  // Local delete link handler
  const deleteLinkLocalHandler = (link_id: number) =>
    dispatch(deleteOneGeneric(link_id));

  useEffect(() => {
    if (data) dispatch(localGenericsStore(data));
  }, [data, dispatch]);

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");

    if (isUpLoading) processStatusHandler("isLoading");
    if (isUpSuccess) processStatusHandler("isSuccess");
    if (isUpError) processStatusHandler("isError");
  }, [
    isError,
    isLoading,
    isSuccess,
    isUpError,
    isUpLoading,
    isUpSuccess,
    dispatch,
  ]);

  return (
    <GenericsWrapper isTransfer={activeGroup.isActive}>
      <LinkAddBlock />
      <TitleSection title="Generic links:" color="rgb(0, 112, 201)" />
      <LinksWrapper>
        {localGenericLinks.map((current, index) => (
          <DotsLinkModal
            data={current}
            key={index}
            position="generics"
            isActive={activeGroup.isActive}
            deleteLinkLocal={deleteLinkLocalHandler}
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
