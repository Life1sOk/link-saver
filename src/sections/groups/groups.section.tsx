import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";

import { useGroupLocal } from "../../utils/hooks/useGroupLocal";

import { useGetGroupsByTopicIdQuery } from "../../App/store/api/groups";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import BlankModal from "../../modals/blank/blank-section.modal";
import { GroupsStyle, SpinnerWrapper, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  const localGroups = useAppSelector((state) => state.groupsLocal.data);

  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic
  );

  const user_id = useAppSelector((state) => state.user.session.user_id);

  const { addAllGroupsLocal } = useGroupLocal();

  const { data, isLoading, isFetching, refetch } = useGetGroupsByTopicIdQuery({
    topic_id: id,
    user_id,
  });

  useEffect(() => {
    if (data && localGroups.length < 1) addAllGroupsLocal(data);
  }, [data, addAllGroupsLocal, localGroups]);

  useEffect(() => {
    refetch();
  }, [id, refetch]);

  if (isLoading || isFetching) {
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
              <GroupBlock key={group.id} data={group} index={index} />
            ))
          ) : (
            <BlankModal title="Add group" color="#ff7565" />
          )}
        </GroupsWrapper>
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
