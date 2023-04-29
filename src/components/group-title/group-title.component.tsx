import { useRef, useEffect } from "react";

import { useAppDispatch } from "../../App/store/hooks";
import { updateGroupTitle } from "../../App/store/slices/groups.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import { useChangeGroupMutation } from "../../App/store/api/groups";

import { GroupTitleStyle, Title, TitleInput } from "./group-title.style";

interface IGroupTitle {
  group_id: number;
  title: string;
  isActive: boolean;
}

const GroupTitle = ({ title, group_id, isActive }: IGroupTitle) => {
  const dispatch = useAppDispatch();

  const [changeGroupTitleApi, { isLoading, isSuccess, isError }] =
    useChangeGroupMutation();

  const titleGroupRef = useRef<HTMLInputElement>(null);

  const focusLeftHandler = async () => {
    let changedTitle = titleGroupRef.current?.value!;

    // Check title changes
    if (changedTitle === title) return;

    const upTitle = {
      id: group_id,
      new_title: changedTitle,
    };

    // Local
    dispatch(updateGroupTitle(upTitle));

    // Send changes
    await changeGroupTitleApi(upTitle);

    return;
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");
  }, [isError, isLoading, isSuccess, dispatch]);

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
