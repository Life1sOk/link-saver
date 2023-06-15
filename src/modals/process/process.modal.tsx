import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";

import {
  ProcessStyle,
  AcceptedProcess,
  ProcessProcess,
  ErrorProcess,
  IconWrapper,
} from "./process.style";

/*
  Можно сделать через массив и флекс -
    поискать инфу и подумать как лучше
*/

const ProcessModal = () => {
  const currentStatus = useAppSelector((state) => state.process.status);

  if (currentStatus === "isLoading")
    return (
      <ProcessProcess>
        <IconWrapper>{icons.process}</IconWrapper>
        Saving...
      </ProcessProcess>
    );
  if (currentStatus === "isSuccess")
    return (
      <AcceptedProcess>
        <IconWrapper>{icons.done}</IconWrapper>All changes saved
      </AcceptedProcess>
    );
  if (currentStatus === "isError")
    return (
      <ErrorProcess>
        <IconWrapper>{icons.error}</IconWrapper>Saving failed
      </ErrorProcess>
    );

  return (
    <ProcessStyle>
      <IconWrapper>{icons.default}</IconWrapper>No changes
    </ProcessStyle>
  );
};

export default ProcessModal;
