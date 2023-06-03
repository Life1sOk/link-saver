import { useAppDispatch } from "../../App/store/hooks";

import { toggleFaq, toggleReport } from "../../App/store/slices/repfaq.slice";

export const useRepfaqLocal = () => {
  const dispatch = useAppDispatch();

  const toggleFaqLocal = () => dispatch(toggleFaq());
  const toggleReportLocal = () => dispatch(toggleReport());

  return {
    toggleFaqLocal,
    toggleReportLocal,
  };
};
