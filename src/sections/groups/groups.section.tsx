import { useAppSelector } from "../../App/store/hooks";

import { useGetGroupsByTopicIdQuery } from "../../App/store/api/groups";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";

import { GroupsStyle, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  const user_id = useAppSelector((state) => state.user.session.user_id);

  const { data, error, isLoading } = useGetGroupsByTopicIdQuery({
    topic_id: id,
    user_id,
  });

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <GroupsWrapper>
          {data?.map((group) => (
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
