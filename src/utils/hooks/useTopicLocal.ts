import { useAppDispatch } from "../../App/store/hooks";

import {
  addTopics,
  addOneTopic,
  updateOneTopic,
  updateOneTopicId,
  removeOneTopic,
  // Window
  toggleTopicWindowHandler,
  activeTopicStore,
  defaultState,
} from "../../App/store/slices/topics.slice";

import { ITopic } from "../../interfaces/topic";

interface IUpdate {
  index: number;
  title: string;
}

interface IUpId {
  oldId: number;
  newId: void;
}

export const useTopicLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllTopicsLocal = (arg: ITopic[]) => dispatch(addTopics(arg));
  const addOneTopicLocal = (arg: ITopic) => dispatch(addOneTopic(arg));
  const updateOneTopicLocal = (arg: IUpdate) => dispatch(updateOneTopic(arg));
  const updateOneTopicIdLocal = (arg: IUpId) => dispatch(updateOneTopicId(arg));
  const deleteOneTopicLocal = (arg: number) => dispatch(removeOneTopic(arg));

  // Window
  const toggleTopicWindow = () => dispatch(toggleTopicWindowHandler());
  const editTopicWindow = (arg: any) => dispatch(activeTopicStore(arg));
  const resetTopicWindow = () => dispatch(defaultState());

  return {
    addAllTopicsLocal,
    addOneTopicLocal,
    updateOneTopicLocal,
    updateOneTopicIdLocal,
    deleteOneTopicLocal,
    // Window
    toggleTopicWindow,
    editTopicWindow,
    resetTopicWindow,
  };
};
