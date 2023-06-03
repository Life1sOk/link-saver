import { useEffect } from "react";

import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { IShortLink } from "../../utils/interfaces/link";

import { useGroupsLogic } from "../../utils/contollers/useGroupsLogic";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import GroupBlock from "../../blocks/group/group.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import { IGroupGet } from "../../utils/interfaces/group";
import { ITopic } from "../../utils/interfaces/topic";

import Blank from "../../components/blank/blank-section.modal";
import { GroupsStyle, SpinnerWrapper, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic
  );
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const localGroups = useAppSelector((state) => state.groupsLocal.data);
  const isGroupPull = useAppSelector((state) => state.groupsLocal.pull);

  const activeTopicTitle = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic.topic_title
  );

  // Logic hooks takes actions and state
  const { getGroupsStore, getGroupsStoreResult, deleteGroup, transitionToTopic } =
    useGroupsLogic();
  const { linkTransitionToGeneric, deleteGroupLink } = useLinkLogic();

  const deleteGroupHandler = (group_id: number, data: IGroupGet) =>
    deleteGroup(user_id, group_id, data, topic_title);

  const deleteGroupLinkHandler = (data: IShortLink, index: number) =>
    deleteGroupLink(data, index);

  const transitionToGenericsHandler = (data: IShortLink, index: number) =>
    linkTransitionToGeneric(data, index);

  const transitionToTopicHandler = (topic: ITopic, group: IGroupGet) =>
    transitionToTopic(topic, group, activeTopicTitle);

  useEffect(() => {
    if (isGroupPull) getGroupsStore(id, user_id);
  }, [id, user_id, isGroupPull]);

  if (getGroupsStoreResult.isFetching) {
    return (
      <GroupsStyle>
        <TitleSection title={topic_title} sectionType="group" />
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      </GroupsStyle>
    );
  }

  return (
    <GroupsStyle>
      <TitleSection title={topic_title} sectionType="group" />
      <GroupsWrapper>
        {localGroups.length > 0 ? (
          localGroups.map((group, index) => (
            <GroupBlock
              key={group.id}
              data={group}
              index={index}
              transitionLink={transitionToGenericsHandler}
              transitionGroup={transitionToTopicHandler}
              deleteLinkHandler={deleteGroupLinkHandler}
              deleteGroupHandler={deleteGroupHandler}
            />
          ))
        ) : (
          <Blank title="groups" icon={icons.group} />
        )}
      </GroupsWrapper>
    </GroupsStyle>
  );
};

export default GroupsSection;
