import { useState, useRef } from "react";

import { useChangeGroupMutation } from "../../App/store/api/groups";

import { GroupTitleStyle, Title, TitleInput } from "./group-title.style";

interface IGroupTitle {
  group_id: number;
  title: string;
}

const GroupTitle = ({ title, group_id }: IGroupTitle) => {
  const [isFix, setIsFix] = useState(false);
  const [changeGroupTitleApi] = useChangeGroupMutation();

  const titleGroupRef = useRef<HTMLInputElement>(null);

  const changeTitleHandler = () => setIsFix(true);

  const focusLeftHandler = async () => {
    let changedTitle = titleGroupRef.current?.value!;

    // Check title changes
    if (changedTitle === title) {
      return setIsFix(false);
    }
    // Send changes
    await changeGroupTitleApi({
      id: group_id,
      new_title: changedTitle,
    });

    return setIsFix(false);
  };

  return (
    <GroupTitleStyle>
      {!isFix ? (
        <Title onDoubleClick={changeTitleHandler}>{title}</Title>
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
