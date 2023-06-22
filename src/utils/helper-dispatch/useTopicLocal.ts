import { useAppDispatch } from "../../App/store/hooks";

import {
  addTopics,
  addOneTopic,
  updateOneTopic,
  updateOneTopicId,
  removeOneTopic,
  // Count
  addTopicCount,
  deleteTopicCount,
  incCount,
  decCount,
  // Window
  toggleTopicWindowHandler,
  activeTopicStore,
  defaultState,
} from "../../App/store/slices/topics.slice";

import { ITopic } from "../interfaces/topic";

interface IUpdate {
  index: number;
  title: string;
}

interface IUpId {
  oldId: number;
  newId: void;
}

type IKey = {
  key: string;
};

type ICount = {
  count: number;
};

export const useTopicLocal = () => {
  const dispatch = useAppDispatch();

  // CRUD
  const addAllTopicsLocal = (arg: ITopic[]) => dispatch(addTopics(arg));
  const addOneTopicLocal = (arg: ITopic) => dispatch(addOneTopic(arg));
  const updateOneTopicLocal = (arg: IUpdate) => dispatch(updateOneTopic(arg));
  const updateOneTopicIdLocal = (arg: IUpId) => dispatch(updateOneTopicId(arg));
  const deleteOneTopicLocal = (arg: number) => dispatch(removeOneTopic(arg));

  // Topic count
  const addTopicCountLocal = (arg: ICount & IKey) => dispatch(addTopicCount(arg));
  const deleteTopicCountLocal = (arg: IKey) => dispatch(deleteTopicCount(arg));
  const incTopicCountLocal = (arg: IKey) => dispatch(incCount(arg));
  const decTopicCountLocal = (arg: IKey) => dispatch(decCount(arg));

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
    // Count
    addTopicCountLocal,
    deleteTopicCountLocal,
    incTopicCountLocal,
    decTopicCountLocal,
    // Window
    toggleTopicWindow,
    editTopicWindow,
    resetTopicWindow,
  };
};
