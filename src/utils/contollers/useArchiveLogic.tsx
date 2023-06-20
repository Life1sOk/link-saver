import { useLazyGetArchiveQuery } from "../../App/store/api/archive";

import { useArchiveLocal } from "../helper-dispatch/useArchiveLocal";
import { useRequestProcess } from "../helpers/useRequestProcess";

export const useArchiveLogic = () => {
  // --------------------- LOCAL ------------------------ //
  const { addToArchiveAllLocal } = useArchiveLocal();

  // --------------------- SERVER ------------------------ //
  const [getArchiveApi, getArchiveApiResult] = useLazyGetArchiveQuery();
  useRequestProcess(getArchiveApiResult);

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
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    getArchive,
  };
};
