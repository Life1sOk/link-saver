import {
  useLazyGetFriendListsQuery,
  useInviteFriendMutation,
  useAcceptFriendMutation,
  useCancelFriendMutation,
  useDeleteFriendMutation,
} from "../../App/store/api/friends";

import { useFriendsLocal } from "../helper-dispatch/useFriendsLocal";

import { useRequestProcess } from "../helper-dispatch/useRequestProcess";

import { IUser, IUserTrans } from "../interfaces/user";

export const useFriendsLogic = () => {
  // --------------------- LOCAL ------------------------ //
  // Lists: friends, invited, incoming, search
  const { addOneToListLocal, deleteOneFromListLocal, updateOneFromInvitedLocal } =
    useFriendsLocal();

  // --------------------- SERVER ------------------------ //
  const [getFriendListsApi, getFriendListsApiResult] = useLazyGetFriendListsQuery();
  useRequestProcess(getFriendListsApiResult);

  const [inviteFriendApi, inviteFriendApiResult] = useInviteFriendMutation();
  useRequestProcess(inviteFriendApiResult);

  const [acceptFriendApi, acceptFriendApiResult] = useAcceptFriendMutation();
  useRequestProcess(acceptFriendApiResult);

  const [cancelFriendApi, cancelFriendApiResult] = useCancelFriendMutation();
  useRequestProcess(cancelFriendApiResult);

  const [deleteFriendApi, deleteFriendApiResult] = useDeleteFriendMutation();
  useRequestProcess(deleteFriendApiResult);

  // --------------------- ACTION ------------------------ //
  const inviteFriend = async (from: number, to: number, user: IUser) => {
    // Local
    deleteOneFromListLocal({ from: "search", id: user.id });
    addOneToListLocal({ which: "invited", user });

    // Server
    await inviteFriendApi({ from, to })
      .unwrap()
      .then((res) => {
        updateOneFromInvitedLocal({ user_id: to, friend_id: res });
      })
      .catch((err) => {
        // Back changes
        if (err) {
          addOneToListLocal({ which: "search", user });
          deleteOneFromListLocal({ from: "invited", id: user.id });
        }
      });
  };

  const acceptFriend = async (user: IUserTrans) => {
    // Local
    deleteOneFromListLocal({ from: "incoming", id: user.id });
    addOneToListLocal({ which: "friends", user });

    // Server
    await acceptFriendApi({ friend_id: user.friend_id })
      .unwrap()
      .then(console.log)
      .catch((err) => {
        // Back changes
        if (err) {
          addOneToListLocal({ which: "incoming", user });
          deleteOneFromListLocal({ from: "friends", id: user.id });
        }
      });
  };

  const notAcceptFriend = async (user: IUserTrans) => {
    // Local
    deleteOneFromListLocal({ from: "incoming", id: user.id });

    // Server
    await cancelFriendApi({ friend_id: user.friend_id })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneToListLocal({ which: "incoming", user });
        }
      });
  };

  const cancelInviteFriend = async (user: IUserTrans) => {
    // Local
    deleteOneFromListLocal({ from: "invited", id: user.id });

    // Server
    await cancelFriendApi({ friend_id: user.friend_id })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneToListLocal({ which: "invited", user });
        }
      });
  };

  const deleteFriend = async (user: IUserTrans, from: number) => {
    // Local
    deleteOneFromListLocal({ from: "friends", id: user.id });

    // Server
    await deleteFriendApi({ friend_id: user.friend_id, to_id: user.id, from_id: from })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneToListLocal({ which: "friends", user });
        }
      });
  };

  return {
    inviteFriend,
    acceptFriend,
    notAcceptFriend,
    cancelInviteFriend,
    deleteFriend,
  };
};
