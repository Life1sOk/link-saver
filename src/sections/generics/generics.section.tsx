import { useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeLinkGroupTitleMutation,
  useDeleteLinkSnapshotMutation,
} from "../../App/store/api/links";
import { useChangeLinkStatusMutation } from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";
import TitleSection from "../../components/title-section/title-section.component";

import { IShortLink } from "../../interfaces/link";

import BlankModal from "../../modals/blank/blank-section.modal";
import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { LinksWrapper, GenericsWrapper } from "./generics.style";

const GenericsSection = () => {
  const activeGroup = useAppSelector((state) => state.groupsLocal.window.activeGroup);
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLocal.data);

  const { addAllGenericsLocal, addOneGenericLocal, deleteOneGenericLocal } =
    useGenericLocal();
  const { addGroupLinkLocal, deleteGroupLinkLocal } = useGroupLocal();

  const { data: generics } = useGetGenericLinksByUserIdQuery(userId);
  const [deleteSnapshotApi] = useDeleteLinkSnapshotMutation();
  const [changeGroupLinkApi, changeGroupLinkApiResult] =
    useChangeLinkGroupTitleMutation();
  useRequestProcess(changeGroupLinkApiResult);

  const [, result] = useChangeLinkStatusMutation();
  useRequestProcess(result);

  // Need local change
  const linkTransitionToGroup = async (data: IShortLink) => {
    // Local change - generic remove
    deleteOneGenericLocal(data.id);
    // Local change - group add link
    addGroupLinkLocal({ link_data: data, index: activeGroup.group_index });
    // Server changes
    await changeGroupLinkApi({ id: data?.id, group_id: activeGroup.id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          deleteGroupLinkLocal({ link_id: data.id, index: activeGroup.group_index });
          addOneGenericLocal(data);
        }
      });
  };

  // Delete link
  const deleteLinkHandler = async ({
    link_id,
    data,
  }: {
    link_id: number;
    data: IShortLink;
  }) => {
    // Local
    deleteOneGenericLocal(link_id);
    // Server
    await deleteSnapshotApi({ id: link_id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          addOneGenericLocal(data);
        }
      });
  };

  useEffect(() => {
    if (generics && localGenericLinks.length < 1) addAllGenericsLocal(generics);
  }, [generics, addAllGenericsLocal, localGenericLinks]);

  return (
    <GenericsWrapper isTransfer={activeGroup.isActive}>
      <LinkAddBlock />
      <TitleSection title="Generic links:" color="rgb(0, 112, 201)" />
      <LinksWrapper>
        {localGenericLinks.length > 0 ? (
          localGenericLinks.map((current, index) => (
            <DotsLinkModal
              data={current}
              key={index}
              position="generics"
              isActive={activeGroup.isActive}
              deleteLink={deleteLinkHandler}
              linkTransitionHandler={linkTransitionToGroup}
            >
              <Link data={current} />
            </DotsLinkModal>
          ))
        ) : (
          <BlankModal title="Add link" color="rgb(0, 112, 201)" />
        )}
      </LinksWrapper>
    </GenericsWrapper>
  );
};

export default GenericsSection;
