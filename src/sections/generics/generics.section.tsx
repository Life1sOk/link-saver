import { useEffect } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import { useGetGenericLinksByUserIdQuery } from "../../App/store/api/links";

import TitleSection from "../../components/title-section/title-section.component";
import Linker from "../../components/linker/linker.component";

import { IShortLink } from "../../utils/interfaces/link";
import DragDrop from "../../utils/drag-drop/drag-drop.wrapper";

import BlankModal from "../../shared/blank/blank-section.modal";
import { LinksWrapper, GenericsWrapper } from "./generics.style";

const GenericsSection = () => {
  const activeGroup = useAppSelector((state) => state.groupsLocal.window.activeGroup);
  const userId = useAppSelector((state) => state.user.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLocal.data);

  const { linkTransitionToGroup, deleteGenericLink } = useLinkLogic();
  const { addAllGenericsLocal } = useGenericLocal();

  const { data: generics } = useGetGenericLinksByUserIdQuery(userId);

  // Need local change
  const linkTransitionToGroupHandler = async (data: IShortLink) => {
    const group_index = activeGroup.group_index;
    const group_id = activeGroup.id;

    await linkTransitionToGroup({ data, group_index, group_id });
  };

  // Delete link
  const deleteLinkHandler = async (data: IShortLink) => {
    await deleteGenericLink(data);
  };

  useEffect(() => {
    if (generics && generics?.length > 0) addAllGenericsLocal(generics);
  }, [generics, addAllGenericsLocal]);

  return (
    <GenericsWrapper isTransfer={activeGroup.isActive}>
      <TitleSection title="Generic links:" sectionType="generic" />
      <LinksWrapper>
        {localGenericLinks.length > 0 ? (
          localGenericLinks.map((current, index) => (
            <DragDrop key={index}>
              <Linker
                data={current}
                position="generics"
                isActive={activeGroup.isActive}
                deleteLink={deleteLinkHandler}
                linkTransitionHandler={linkTransitionToGroupHandler}
              />
            </DragDrop>
          ))
        ) : (
          <BlankModal title="link" />
        )}
      </LinksWrapper>
    </GenericsWrapper>
  );
};

export default GenericsSection;
