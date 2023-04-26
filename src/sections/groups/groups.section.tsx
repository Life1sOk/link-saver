import { useAppSelector } from "../../App/store/hooks";

import { useGetGroupsByTopicIdQuery } from "../../App/store/api/groups";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";
import TitleSection from "../../components/title-section/title-section.component";

import { GroupsStyle, GroupsWrapper } from "./groups.style";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  const user_id = useAppSelector((state) => state.user.session.user_id);

  const { data } = useGetGroupsByTopicIdQuery({
    topic_id: id,
    user_id,
  });

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <TitleSection title={topic_title} />
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
