import {
  useLazyGetTransitionQuery,
  useAddTransitionMutation,
  useAcceptTransitionMutation,
  useCancelTransitionMutation,
} from "../../App/store/api/transition";
import { useRequestProcess } from "../helpers/useRequestProcess";

import { useBoxLocal } from "../helper-dispatch/useBoxLocal";
import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useTopicLocal } from "../helper-dispatch/useTopicLocal";

import { IGroupGet } from "../interfaces/group";
import { ITransRece } from "../interfaces/transition";

interface IAddTrans {
  from: number;
  to: number;
  data: IGroupGet;
}

export const useTransitionLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    toggleSendGroupWindow,
    removeReceivingLocal,
    addReceivingLocal,
    addToReceivingAllLocal,
  } = useBoxLocal();
  const { updateGroupAllIdLocal, addOneGroupLocal, deleteGroupLocal, pullGroupLocal } =
    useGroupLocal();
  const { resetTopicWindow, incTopicCountLocal, decTopicCountLocal } = useTopicLocal();

  // --------------------- SERVER ------------------------ //
  const [getTransitionsApi, getTransitionsApiResult] = useLazyGetTransitionQuery();
  useRequestProcess(getTransitionsApiResult);

  const [addTransitionApi, addTransitionApiResult] = useAddTransitionMutation();
  useRequestProcess(addTransitionApiResult);

  const [acceptTransitionApi, acceptTransitionApiResult] = useAcceptTransitionMutation();
  useRequestProcess(acceptTransitionApiResult);

  const [cancelTransitionApi, cancelTransitionApiResult] = useCancelTransitionMutation();
  useRequestProcess(cancelTransitionApiResult);

  // --------------------- ACTION ------------------------ //
  const getTransitions = async (user_id: number) => {
    return await getTransitionsApi(user_id)
      .unwrap()
      .then((response) => {
        addToReceivingAllLocal(response);
      });
  };

  const addTransition = async (arg: IAddTrans) => {
    // Local
    toggleSendGroupWindow();

    // Server
    return await addTransitionApi(arg).unwrap().then(console.log);
  };

  const acceptTransition = async (arg: ITransRece, user_id: number) => {
    const { group, transition_id } = arg;
    // Active topic 'MAIN'
    resetTopicWindow();
    // // Local
    pullGroupLocal(false);
    addOneGroupLocal(group);
    incTopicCountLocal({ key: "Main" });
    removeReceivingLocal(transition_id);

    // Prep for transition
    const prepObj = {
      transition_id,
      user_id,
      topic_id: 0,
      group_title: group.group_title,
      links: group.links,
    };

    return await acceptTransitionApi(prepObj)
      .unwrap()
      .then((response) => {
        if (response) {
          const prepObj = {
            old_id: group.id,
            new_id: response.group_id,
            user_id,
            links_id: response.links,
          };
          updateGroupAllIdLocal(prepObj);
          pullGroupLocal(true);
        }
      })
      .catch((err) => {
        // Back chages
        if (err) {
          addReceivingLocal(arg);
          deleteGroupLocal(group.id);
          decTopicCountLocal({ key: "Main" });
          pullGroupLocal(true);
        }
      });
  };

  const cancleTransition = async (arg: ITransRece) => {
    const { transition_id } = arg;
    console.log(transition_id, "arg");
    // Local
    removeReceivingLocal(transition_id);

    // Server
    return await cancelTransitionApi({ transition_id })
      .unwrap()
      .then(console.log)
      .catch((err) => {
        // Back changes
        if (err) {
          addReceivingLocal(arg);
        }
      });
  };

  return {
    addTransition,
    acceptTransition,
    getTransitions,
    cancleTransition,
  };
};
