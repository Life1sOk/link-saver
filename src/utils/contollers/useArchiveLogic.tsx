import {
  useLazyGetArchiveQuery,
  useDeleteArchiveMutation,
} from "../../App/store/api/archive";

import { useGenericLocal } from "../helper-dispatch/useGenericLocal";
import { useGroupLocal } from "../helper-dispatch/useGroupLocal";
import { useArchiveLocal } from "../helper-dispatch/useArchiveLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";

import { IDeleteLinkArchive, IDeleteGroupArchive } from "../interfaces/archive";

export const useArchiveLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const {
    addToArchiveAllLocal,
    addLinkIntoArchiveLocal,
    addGroupIntoArchiveLocal,
    deleteLinkFromArchiveLocal,
    deleteGroupFromArchiveLocal,
  } = useArchiveLocal();

  const { addOneGenericLocal, deleteOneGenericLocal } = useGenericLocal();
  const { addOneGroupLocal, deleteGroupLocal } = useGroupLocal();

  // --------------------- SERVER ------------------------ //
  const [getArchiveApi, getArchiveApiResult] = useLazyGetArchiveQuery();
  useRequestProcess(getArchiveApiResult);

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

  const deleteArchive = async ({
    data,
    user_id,
    data_type,
  }: IDeleteLinkArchive | IDeleteGroupArchive) => {
    const props = { user_id, data_id: data.id, data_type };

    // Local changes
    if (data_type === "link") {
      deleteLinkFromArchiveLocal(data.id);
    }

    if (data_type === "group") {
      deleteGroupFromArchiveLocal(data.id);
      // addOneGroupLocal(data);
    }

    // Server changes
    try {
      const response = await deleteArchiveApi(props).unwrap();
      console.log(response);
    } catch (err) {
      // Back local changes
      if (err) {
        if (data_type === "link") {
          addLinkIntoArchiveLocal(data);
        }

        if (data_type === "group") {
          addGroupIntoArchiveLocal({ topic_title: "Main", group: data });
          // deleteGroupLocal(data.id);
        }
      }
    }
  };

  return {
    getArchive,
    deleteArchive,
  };
};
