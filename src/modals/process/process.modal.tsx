import { useAppSelector } from "../../App/store/hooks";

import { ProcessStyle } from "./process.style";

const ProcessModal = () => {
  const currentStatus = useAppSelector((state) => state.process.status);

  if (currentStatus === "isLoading")
    return <ProcessStyle>Saving...</ProcessStyle>;
  if (currentStatus === "isSuccess")
    return <ProcessStyle>All changes saved</ProcessStyle>;
  if (currentStatus === "isError")
    return <ProcessStyle>Saving failed</ProcessStyle>;

  return <ProcessStyle>No changes</ProcessStyle>;
};

export default ProcessModal;
