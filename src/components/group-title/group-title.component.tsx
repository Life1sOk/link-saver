import { useRef } from "react";

import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import { useChangeGroupMutation } from "../../App/store/api/groups";

import { GroupTitleStyle, Title, TitleInput } from "./group-title.style";

interface IGroupTitle {
  group_id: number;
  title: string;
  isActive: boolean;
}

const GroupTitle = ({ title, group_id, isActive }: IGroupTitle) => {
  const { updateGroupTitleLocal } = useGroupLocal();

  const [changeGroupTitleApi, changeGroupTitleApiResult] = useChangeGroupMutation();
  useRequestProcess(changeGroupTitleApiResult);

  const titleGroupRef = useRef<HTMLInputElement>(null);

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

    // Local
    updateGroupTitleLocal(newTitle);

    // Send changes
    await changeGroupTitleApi(newTitle)
      .unwrap()
      .catch((err) => {
        if (err) {
          // back chages
          updateGroupTitleLocal(oldTitle);
        }
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
