import { icons } from "../../../utils/react-icons";

import { ArchiveItemStyle, Actions } from "./archive-item.style";

interface IArchiveItem {
  date: Date;
  children: JSX.Element;
}

const ArchiveItem = ({ date, children }: IArchiveItem) => {
  return (
    <ArchiveItemStyle>
      {children}
      <Actions title="Restore back">{icons.restore}</Actions>
    </ArchiveItemStyle>
  );
};

export default ArchiveItem;
