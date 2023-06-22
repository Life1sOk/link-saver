import {
  useLazyGetArchiveQuery,
  useRestoreArchiveMutation,
  useDeleteArchiveMutation,
} from "../../App/store/api/archive";

import { useArchiveLocal } from "../helper-dispatch/useArchiveLocal";
import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useGenericLocal } from "../helper-dispatch/useGenericLocal";
import { useTopicLocal } from "../helper-dispatch/useTopicLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";

import {
  IRestoreLinkArchive,
  IRestoreGroupArchive,
  IGroupArchive,
  ILinkArchive,
} from "../interfaces/archive";

export const useArchiveLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    addToArchiveAllLocal,
    addLinkIntoArchiveLocal,
    addGroupIntoArchiveLocal,
    deleteLinkFromArchiveLocal,
    deleteGroupFromArchiveLocal,
  } = useArchiveLocal();

  const { incTopicCountLocal } = useTopicLocal();
  const { addOneGroupLocal, deleteGroupLocal } = useGroupLocal();
  const { addOneGenericLocal, deleteOneGenericLocal } = useGenericLocal();

  // --------------------- SERVER ------------------------ //
  const [getArchiveApi, getArchiveApiResult] = useLazyGetArchiveQuery();
  useRequestProcess(getArchiveApiResult);

  const [restoreArchiveApi, restoreArchiveApiResult] = useRestoreArchiveMutation();
  useRequestProcess(restoreArchiveApiResult);

  const [deleteArchiveApi, deleteArchiveApiResult] = useDeleteArchiveMutation();
  useRequestProcess(deleteArchiveApiResult);

  // --------------------- ACTION ------------------------ //
  const getArchive = async (user_id: number) => {
    try {
      const data: string[] = await getArchiveApi(user_id).unwrap();

      const links = [];
      const groups = [];

      for (let i = 0; i < data.length; i++) {
        let open = JSON.parse(data[i]);

        if (open?.type === "link") links.push(open.data);
        if (open?.type === "group")
          groups.push({ topic_title: "Main", group: open.data });
      }

      addToArchiveAllLocal({ links, groups });
    } catch (err) {
      console.log(err);
    }
  };

  const restoreArchive = async ({
    data,
    user_id,
    data_type,
    topic_id,
    topic_title,
  }: IRestoreLinkArchive | IRestoreGroupArchive) => {
    const props = { user_id, data, data_type };

    // Local changes
    if (data_type === "link") {
      deleteLinkFromArchiveLocal(data.id);
      addOneGenericLocal(data);
    }

    if (data_type === "group") {
      props.data = { ...data, topic_id };
      deleteGroupFromArchiveLocal(data.id);
      addOneGroupLocal({ ...data, topic_id });
      incTopicCountLocal({ key: topic_title });
    }

    // Server changes
    try {
      const response = await restoreArchiveApi(props).unwrap();
      console.log(response);
    } catch (err) {
      // Back local changes
      if (err) {
        if (data_type === "link") {
          addLinkIntoArchiveLocal(data);
          deleteOneGenericLocal(data.id);
        }

        if (data_type === "group") {
          addGroupIntoArchiveLocal({
            topic_title: "Main",
            group: data,
          });
          deleteGroupLocal(data.id);
        }
      }
    }
  };

  const deleteArchive = async (
    topic_title: string,
    { data, data_type, user_id }: IGroupArchive | ILinkArchive
  ) => {
    // Local
    if (data_type === "link") deleteLinkFromArchiveLocal(data.id);
    if (data_type === "group") deleteGroupFromArchiveLocal(data.id);

    await deleteArchiveApi({ user_id, data_id: data.id, data_type })
      .unwrap()
      .catch((err) => {
        if (err) {
          if (data_type === "link") addLinkIntoArchiveLocal(data);
          if (data_type === "group")
            addGroupIntoArchiveLocal({ topic_title, group: data });
        }
      });
  };

  return {
    getArchive,
    restoreArchive,
    deleteArchive,
  };
};
