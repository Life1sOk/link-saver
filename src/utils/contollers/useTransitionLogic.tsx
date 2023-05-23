import {
  useLazyGetTransitionQuery,
  useAddTransitionMutation,
  useAcceptTransitionMutation,
} from "../../App/store/api/transition";
import { useRequestProcess } from "../helper-dispatch/useRequestProcess";

import { useBoxLocal } from "../helper-dispatch/useBoxLocal";
import { useGroupLocal } from "../helper-dispatch/useGroupLocal";

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
  const { updateGroupAllIdLocal, addOneGroupLocal, deleteGroupLocal } = useGroupLocal();

  // --------------------- SERVER ------------------------ //
  const [getTransitionsApi, getTransitionsApiResult] = useLazyGetTransitionQuery();
  useRequestProcess(getTransitionsApiResult);

  const [addTransitionApi, addTransitionApiResult] = useAddTransitionMutation();
  useRequestProcess(addTransitionApiResult);

  const [acceptTransitionApi, acceptTransitionApiResult] = useAcceptTransitionMutation();
  useRequestProcess(acceptTransitionApiResult);

  // --------------------- ACTION ------------------------ //
  const getTransitions = async (user_id: number) => {
    await getTransitionsApi(user_id)
      .unwrap()
      .then((response) => {
        console.log(response, "response");
        addToReceivingAllLocal(response);
      });
  };

  const addTransition = async (arg: IAddTrans) => {
    // Local
    toggleSendGroupWindow();

    // Server
    await addTransitionApi(arg).unwrap().then(console.log);
  };

  const acceptTransition = async (arg: ITransRece, user_id: number) => {
    const { group, transition_id } = arg;

    // Local
    addOneGroupLocal(group);
    removeReceivingLocal(transition_id);

    // Prep for transition
    const prepObj = {
      transition_id,
      user_id,
      topic_id: 0,
      group_title: group.group_title,
      links: group.links,
    };

    await acceptTransitionApi(prepObj)
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
        }
      })
      .catch((err) => {
        // Back chages
        if (err) {
          deleteGroupLocal(group.id);
          addReceivingLocal(arg);
        }
      });
  };

  return {
    addTransition,
    acceptTransition,
    getTransitions,
  };
};
