import { MarkIcon } from "./mark.style";

import { icons } from "../../utils/react-icons";

interface IMark {
  sectionType: "topic" | "group" | "generic";
}

const Mark = ({ sectionType }: IMark) => {
  return <MarkIcon sectionType={sectionType}>{icons.marker}</MarkIcon>;
};

export default Mark;
