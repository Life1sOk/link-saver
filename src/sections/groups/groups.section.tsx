import { useEffect } from "react";

import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { localGroupsStore } from "../../App/store/slices/groups.slice";

import { useGetGroupsByTopicIdQuery } from "../../App/store/api/groups";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import { GroupsStyle, SpinnerWrapepr, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  const dispatch = useAppDispatch();

  const localGroups = useAppSelector((state) => state.groupsLocal.data);

  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  const user_id = useAppSelector((state) => state.user.session.user_id);

  const { data, isLoading } = useGetGroupsByTopicIdQuery({
    topic_id: id,
    user_id,
  });

  useEffect(() => {
    if (data) dispatch(localGroupsStore(data));
  }, [dispatch, data]);

  if (isLoading) {
    return (
      <SpinnerWrapepr>
        <LoadingSpinner />
      </SpinnerWrapepr>
    );
  }

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <TitleSection title={topic_title} />
        <GroupsWrapper>
          {localGroups.map((group) => (
            <GroupBlock
              key={group.id}
              groupId={group.id!}
              title={group.group_title}
            />
          ))}
        </GroupsWrapper>
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
