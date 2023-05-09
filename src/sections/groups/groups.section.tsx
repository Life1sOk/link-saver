import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { IShortLink } from "../../utils/interfaces/link";

import { useGroupsLogic } from "../../utils/contollers/useGroupLogic";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import BlankModal from "../../modals/blank/blank-section.modal";
import { GroupsStyle, SpinnerWrapper, GroupsWrapper } from "./groups.style";
import { IGroupGet } from "../../utils/interfaces/group";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic
  );
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const localGroups = useAppSelector((state) => state.groupsLocal.data);

  // Logic hooks takes actions and state
  const { getGroupsStore, getGroupsStoreResult, deleteGroup } = useGroupsLogic();
  const { linkTransitionToGeneric, deleteGroupLink } = useLinkLogic();

  const deleteGroupHandler = (group_id: number, data: IGroupGet) =>
    deleteGroup(user_id, group_id, data);

  const deleteGroupLinkHandler = (data: IShortLink, index: number) =>
    deleteGroupLink(data, index);

  const transitionToGenericsHandler = (data: IShortLink, index: number) =>
    linkTransitionToGeneric(data, index);

  useEffect(() => {
    getGroupsStore(id, user_id);
  }, [id, user_id]);

  if (getGroupsStoreResult.isFetching) {
    return (
      <GroupsStyle>
        <TitleSection title={topic_title} color="#ff7565" />
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      </GroupsStyle>
    );
  }

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <TitleSection title={topic_title} color="#ff7565" />
        <GroupsWrapper>
          {localGroups.length > 0 ? (
            localGroups.map((group, index) => (
              <GroupBlock
                key={group.id}
                data={group}
                index={index}
                transitionLink={transitionToGenericsHandler}
                deleteLinkHandler={deleteGroupLinkHandler}
                deleteGroupHandler={deleteGroupHandler}
              />
            ))
          ) : (
            <BlankModal title="group" color="#ff7565" />
          )}
        </GroupsWrapper>
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
