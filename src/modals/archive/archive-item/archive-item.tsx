import { useAppSelector } from "../../../App/store/hooks";

import { useLinkLogic } from "../../../utils/contollers/useLinkLogic";
import { useGroupsLogic } from "../../../utils/contollers/useGroupsLogic";

import { icons } from "../../../utils/react-icons";

import { IGroupGet } from "../../../utils/interfaces/group";
import { IShortLink } from "../../../utils/interfaces/link";

import {
  IDeleteLinkArchive,
  IDeleteGroupArchive,
} from "../../../utils/interfaces/archive";

import { ArchiveItemStyle, Actions } from "./archive-item.style";

interface IArchiveLinkItem {
  data: IShortLink;
  data_type: "link";
  actionHandler: (arg: IDeleteLinkArchive) => void;
  children: JSX.Element;
}

interface IArchiveGroupItem {
  data: IGroupGet;
  data_type: "group";
  actionHandler: (arg: IDeleteGroupArchive) => void;
  children: JSX.Element;
}

const ArchiveItem = ({
  data,
  data_type,
  actionHandler,
  children,
}: IArchiveLinkItem | IArchiveGroupItem) => {
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);

  const { addLinkGeneric } = useLinkLogic();
  const { addGroup } = useGroupsLogic();

  const restoreHandler = () => {
    if (data_type === "group") {
      const upGroup = { ...data, user_id, topic_id: activeTopic.id };

      actionHandler({ data, data_type, user_id });
      addGroup(upGroup, activeTopic.topic_title);
    }
    if (data_type === "link") {
      const upLink = { user_id, ...data };

      actionHandler({ data, data_type, user_id });
      addLinkGeneric(upLink);
    }
  };

  return (
    <ArchiveItemStyle>
      {children}
      <Actions title="Restore back" onClick={restoreHandler}>
        {icons.restore}
      </Actions>
    </ArchiveItemStyle>
  );
};

export default ArchiveItem;
