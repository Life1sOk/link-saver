import { useAppSelector } from "../../App/store/hooks";

import { useGetGroupsByTopicIdQuery } from "../../App/store/api/groups";

import GroupBlock from "../../blocks/group/group.block";
import ActionBlock from "../../blocks/action/action.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";

import { GroupsStyle, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  const { data, error, isLoading } = useGetGroupsByTopicIdQuery(2);

  console.log(data, "groups");

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <h1>{topic_title}</h1>
        <ActionBlock />
        <GroupsWrapper>
          {data?.map((group) => (
            <GroupBlock key={group.id} title={group.group_title} />
          ))}
        </GroupsWrapper>
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
