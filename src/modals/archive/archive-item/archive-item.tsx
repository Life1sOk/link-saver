import { useAppSelector } from "../../../App/store/hooks";

import { useArchiveLogic } from "../../../utils/contollers/useArchiveLogic";

import { icons } from "../../../utils/react-icons";

import { IGroupGet } from "../../../utils/interfaces/group";
import { IShortLink } from "../../../utils/interfaces/link";

import { ArchiveItemStyle, Actions, AcionWrapper } from "./archive-item.style";

interface IArchiveLinkItem {
  data: IShortLink;
  data_type: "link";
  children: JSX.Element;
}

interface IArchiveGroupItem {
  data: IGroupGet;
  data_type: "group";
  children: JSX.Element;
}

const ArchiveItem = ({
  data,
  data_type,
  children,
}: IArchiveLinkItem | IArchiveGroupItem) => {
  const user_id = useAppSelector((state) => state.auth.session.user_id);
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);

  const { restoreArchive, deleteArchive } = useArchiveLogic();

  const restoreHandler = async () => {
    if (data_type === "group") {
      const upGroup = { ...data, topic_id: activeTopic.id };

      // Add group to the server
      await restoreArchive({
        data: upGroup,
        data_type,
        user_id,
        topic_id: activeTopic.id,
        topic_title: activeTopic.topic_title,
      });
    }
    if (data_type === "link") {
      const upLink = { user_id, ...data };

      // Add link to generics
      await restoreArchive({
        data: upLink,
        data_type,
        user_id,
        topic_id: activeTopic.id,
        topic_title: activeTopic.topic_title,
      });
    }
  };

  const deleteHandler = async () => {
    if (data_type === "group")
      await deleteArchive(activeTopic.topic_title, { data, data_type, user_id });
    if (data_type === "link")
      await deleteArchive(activeTopic.topic_title, { data, data_type, user_id });
  };

  return (
    <ArchiveItemStyle>
      {children}
      <AcionWrapper type={data_type}>
        <Actions title="Restore back" onClick={restoreHandler} type="main">
          {icons.restore}
        </Actions>
        <Actions title="Restore back" onClick={deleteHandler} type="delete">
          {icons.archiveDelete}
        </Actions>
      </AcionWrapper>
    </ArchiveItemStyle>
  );
};

export default ArchiveItem;
