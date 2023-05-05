import { useAppDispatch } from "../App/store/hooks";

import {
  addTopics,
  addOneTopic,
  updateOneTopic,
  removeOneTopic,
} from "../App/store/slices/topics.slice";

import { ITopic } from "../interfaces/topic";

interface IUpdate {
  index: number;
  title: string;
}

export const useTopicLocal = () => {
  const dispatch = useAppDispatch();

  const addAllTopicsLocal = (arg: ITopic[]) => dispatch(addTopics(arg));
  const addOneTopicLocal = (arg: ITopic) => dispatch(addOneTopic(arg));
  const updateOneTopicLocal = (arg: IUpdate) => dispatch(updateOneTopic(arg));
  const deleteOneTopicLocal = (arg: number) => dispatch(removeOneTopic(arg));

  return {
    addAllTopicsLocal,
    addOneTopicLocal,
    updateOneTopicLocal,
    deleteOneTopicLocal,
  };
};
