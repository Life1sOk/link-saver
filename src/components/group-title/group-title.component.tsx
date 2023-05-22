import { useRef } from "react";

import { useGroupsLogic } from "../../utils/contollers/useGroupsLogic";

import { GroupTitleStyle, Title, TitleInput } from "./group-title.style";

interface IGroupTitle {
  group_id: number;
  title: string;
  isActive: boolean;
}

const GroupTitle = ({ title, group_id, isActive }: IGroupTitle) => {
  const titleGroupRef = useRef<HTMLInputElement>(null);

  const { updateTitleGroup } = useGroupsLogic();

  const focusLeftHandler = async () => {
    let changedTitle = titleGroupRef.current?.value!;

    // Check title changes
    if (changedTitle === title) return;

    const newTitle = {
      id: group_id,
      new_title: changedTitle,
    };

    const oldTitle = {
      id: group_id,
      new_title: title,
    };

    await updateTitleGroup(newTitle, oldTitle);
    return;
  };

  return (
    <GroupTitleStyle>
      {!isActive ? (
        <Title>{title}</Title>
      ) : (
        <TitleInput
          type="text"
          defaultValue={title}
          ref={titleGroupRef}
          onBlur={focusLeftHandler}
          autoFocus
        />
      )}
    </GroupTitleStyle>
  );
};

export default GroupTitle;
