import { useMemo } from "react";

export const useFilterById = (array: any[], id: number) => {
  const filter = useMemo(() => {
    return array.filter((item) => item.id !== id);
  }, [array, id]);

  return filter;
};
