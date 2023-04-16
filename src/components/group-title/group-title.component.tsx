import { useRef } from "react";

import { useChangeGroupMutation } from "../../App/store/api/groups";

import { GroupTitleStyle, Title, TitleInput } from "./group-title.style";

interface IGroupTitle {
  group_id: number;
  title: string;
  isActive: boolean;
}

const GroupTitle = ({ title, group_id, isActive }: IGroupTitle) => {
  const [changeGroupTitleApi] = useChangeGroupMutation();

  const titleGroupRef = useRef<HTMLInputElement>(null);

  const focusLeftHandler = async () => {
    let changedTitle = titleGroupRef.current?.value!;

    // Check title changes
    if (changedTitle === title) return;
    // Send changes
    await changeGroupTitleApi({
      id: group_id,
      new_title: changedTitle,
    });

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
