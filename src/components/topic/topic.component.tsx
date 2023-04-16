import { useState, useRef, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../App/store/hooks";
import {
  activeTopic,
  defaultState,
} from "../../App/store/slices/active-topic.slice";

import { icons } from "../../utils/react-icons";

import { ITopic } from "../../interfaces/topic";

import {
  useChangeTopicTitleMutation,
  useDeleteTopicMutation,
} from "../../App/store/api/topics";

import AreYouSureModal from "../../modals/areYouSure/are-you-sure.modal";
import { TopicStyle, IconWrapper, Icon } from "./topic.style";

interface ITopicActive {
  topic: ITopic;
  activeHandler: (arg: ITopic) => void;
  // isActive: boolean;
}

const Topic = ({ topic, activeHandler }: ITopicActive) => {
  const dispatch = useAppDispatch();
  const [isChange, setIsChange] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const activeTopicId = useAppSelector(
    (state) => state.activeTopic.current?.id
  );
  const isActive = activeTopicId === topic.id;

  // --------------- For change block ----------- //
  // changes State handlers
  const changeTitleHandler = () => setIsChange(true);
  const notReadyHandler = () => setIsChange(false);

  // Server hook RTK
  const [changeTopicTitleApi] = useChangeTopicTitleMutation();
  // ref input
  const titleTopicRef = useRef<HTMLInputElement>(null);
  // Send request with checks
  const acceptChangesHandler = async () => {
    let changedTitle = titleTopicRef.current?.value!;

    if (changedTitle === topic.topic_title) return setIsChange(false);

    const updatedTopic = await changeTopicTitleApi({
      id: topic.id,
      topic_title: changedTitle,
    });

    if (updatedTopic) dispatch(activeTopic(updatedTopic));
    return setIsChange(false);
  };
  // ------------------------------------------------ //

  // --------------- For delete block ----------------- //
  // delete State handlers
  const deleteHandler = () => setIsDelete(true);
  const notDeleteHandler = () => setIsDelete(false);
  // Server hook RTK
  const [deleteTopicApi] = useDeleteTopicMutation();

  // Send request for delete
  const sureDeleteHandler = async () => {
    await deleteTopicApi({
      id: topic.id,
      user_id: topic.user_id,
    });

    dispatch(defaultState());
    return setIsDelete(false);
  };

  return (
    <TopicStyle onClick={() => activeHandler(topic)} isActive={isActive}>
      <Icon>{icons.topicOpen}</Icon>
      {!isChange ? (
        <p className="title">{topic.topic_title}</p>
      ) : (
        <input
          type="text"
          defaultValue={topic.topic_title}
          ref={titleTopicRef}
          autoFocus
        />
      )}
      {isActive && (
        <IconWrapper>
          {isChange ? (
            <>
              <span onClick={acceptChangesHandler}>Y</span>
              <span onClick={notReadyHandler}>N</span>
            </>
          ) : (
            <>
              <Icon onClick={changeTitleHandler}>{icons.pen}</Icon>
              <Icon onClick={deleteHandler}>{icons.delete}</Icon>
            </>
          )}
        </IconWrapper>
      )}
      <AreYouSureModal
        isActive={isDelete}
        actionSureHandler={sureDeleteHandler}
        actionToggleHandler={notDeleteHandler}
        message="All your groups and links in this topic will be destroyed! Are you sure?"
      />
    </TopicStyle>
  );
};

export default Topic;
