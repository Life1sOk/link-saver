import { useEffect, useId, memo } from "react";
import { useAppSelector } from "../../App/store/hooks";

import { icons } from "../../utils/react-icons";

import { useGenericLocal } from "../../utils/helper-dispatch/useGenericLocal";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";
import { useDragLocal } from "../../utils/helper-dispatch/useDragLocal";

import { useGetGenericLinksByUserIdQuery } from "../../App/store/api/links";

import DropWrapper from "../../utils/drag-drop/drop.wrapper";
import TitleSection from "../../components/title-section/title-section.component";
import Linker from "../../components/linker/linker.component";
import Blank from "../../components/blank/blank-section.modal";

import { IShortLink } from "../../utils/interfaces/link";

import { LinksWrapper, GenericsWrapper, LinksScrollBar } from "./generics.style";

const GenericsSection = memo(() => {
  const uniqueId = useId();
  const activeGroup = useAppSelector((state) => state.groupsLocal.window.activeGroup);
  const user_id = useAppSelector((state) => state.auth.session.user_id);
  const localGenericLinks = useAppSelector((state) => state.genericsLocal.data);
  const dragData = useAppSelector((state) => state.drag.current);

  const { linkTransitionToGroup, linkTransitionToGeneric, deleteGenericLink } =
    useLinkLogic();
  const { addAllGenericsLocal } = useGenericLocal();
  const { removeDraggableLocal } = useDragLocal();

  const { data: generics } = useGetGenericLinksByUserIdQuery(user_id);

  // Need local change
  const linkTransitionToGroupHandler = async (data: IShortLink) => {
    const group_index = activeGroup.group_index;
    const group_id = activeGroup.id;

    await linkTransitionToGroup({ data, group_index, group_id });
  };

  // Drop action
  const dropIntoGenerics = async () => {
    const { type, data, from } = dragData;

    if (type === "link" && data && from !== "generics") {
      await linkTransitionToGeneric(data, from?.group_index!);
    }

    removeDraggableLocal();
  };

  // Delete link
  const deleteLinkHandler = async (data: IShortLink) => {
    await deleteGenericLink(data, user_id);
  };

  useEffect(() => {
    if (generics && generics?.length > 0) addAllGenericsLocal(generics);
  }, [generics, addAllGenericsLocal]);

  return (
    <GenericsWrapper isTransfer={activeGroup.isActive}>
      <TitleSection
        title="Generic links"
        sectionType="generic"
        count={localGenericLinks.length}
      />
      <LinksScrollBar>
        <DropWrapper typeFor="link" actionHandler={dropIntoGenerics}>
          <LinksWrapper>
            {localGenericLinks.length > 0 ? (
              localGenericLinks.map((current, index) => (
                <Linker
                  key={uniqueId + index}
                  data={current}
                  position="generics"
                  isActive={activeGroup.isActive}
                  deleteLink={deleteLinkHandler}
                  linkTransitionHandler={linkTransitionToGroupHandler}
                />
              ))
            ) : (
              <Blank title="links" icon={icons.link} />
            )}
          </LinksWrapper>
        </DropWrapper>
      </LinksScrollBar>
    </GenericsWrapper>
  );
});

export default GenericsSection;
