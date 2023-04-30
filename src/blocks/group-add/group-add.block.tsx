import { useRef, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import { toggleGroupWindowHandler } from "../../App/store/slices/action-window.slice";

import { useAddGroupMutation } from "../../App/store/api/groups";
import { addOneGroup } from "../../App/store/slices/groups.slice";
import { processStatusHandlerStore } from "../../App/store/slices/process.slice";

import Input from "../../components/input/input.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import {
  GroupAddStyle,
  LeftSide,
  GifBlock,
  GroupButtons,
  FormWrapper,
  TitleBlock,
} from "./group-add.style";

const GroupAddBlock = () => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.actionWindow.isAddGroup);
  const activeTopicId = useAppSelector((state) => state.activeTopic.current.id);
  const user_id = useAppSelector((state) => state.user.session.user_id);

  const [addGroupApi, { isLoading, isSuccess, isError }] =
    useAddGroupMutation();

  const groupTitleRef = useRef<HTMLInputElement>(null);

  const closeGroupWindow = () => dispatch(toggleGroupWindowHandler());

  const addGroupHandler = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Take values from inputs
    let title = groupTitleRef.current?.value!;
    // Check if they fields
    if (title.length < 2) return alert("pls field all");
    //Prepare object
    const group = {
      id: Date.now(),
      topic_id: activeTopicId,
      user_id,
      group_title: title,
      links: [],
    };
    // Close window
    closeGroupWindow();
    // Local add
    dispatch(addOneGroup(group));
    // Send data
    await addGroupApi(group);
  };

  useEffect(() => {
    const processStatusHandler = (status: string) =>
      dispatch(processStatusHandlerStore(status));

    if (isLoading) processStatusHandler("isLoading");
    if (isSuccess) processStatusHandler("isSuccess");
    if (isError) processStatusHandler("isError");
  }, [isError, isLoading, isSuccess, dispatch]);

  return (
    <BlackWindowModal isOpen={isOpen}>
      <GroupAddStyle>
        <LeftSide>
          <TitleBlock>Add new group</TitleBlock>
          <FormWrapper onSubmit={addGroupHandler}>
            <Input
              label="Group Title:"
              type="text"
              required
              ref={groupTitleRef}
            />
            <GroupButtons>
              <Button
                name="Cancel"
                type="button"
                actionHandle={closeGroupWindow}
              />
              <Button name="Add group" type="submit" />
            </GroupButtons>
          </FormWrapper>
        </LeftSide>
        <GifBlock>
          <h3>Gif</h3>
        </GifBlock>
      </GroupAddStyle>
    </BlackWindowModal>
  );
};

export default GroupAddBlock;
