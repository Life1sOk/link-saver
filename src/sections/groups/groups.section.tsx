import { useAppSelector } from "../../App/store/hooks";

import ActionBlock from "../../blocks/action/action.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";

import { GroupsStyle } from "./groups.style";

const GroupsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  // console.log(activeTopic, "groups");

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <h1>{topic_title}</h1>
        <ActionBlock />
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
