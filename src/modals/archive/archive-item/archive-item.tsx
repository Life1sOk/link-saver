import { useAppSelector } from "../../../App/store/hooks";

import { useArchiveLogic } from "../../../utils/contollers/useArchiveLogic";

import { icons } from "../../../utils/react-icons";

import { IGroupGet } from "../../../utils/interfaces/group";
import { IShortLink } from "../../../utils/interfaces/link";

import { ArchiveItemStyle, Actions } from "./archive-item.style";

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
  const user_id = useAppSelector((state) => state.user.session.user_id);
  const activeTopic = useAppSelector((state) => state.topicsLocal.window.activeTopic);

  const { restoreArchive } = useArchiveLogic();

  const restoreHandler = () => {
    if (data_type === "group") {
      const upGroup = { ...data, topic_id: activeTopic.id };
      console.log(upGroup, "group");
      // Add group to the server
      restoreArchive({
        data: upGroup,
        data_type,
        user_id,
        topic_id: activeTopic.id,
        topic_title: activeTopic.topic_title,
      });
    }
    if (data_type === "link") {
      const upLink = { user_id, ...data };
      console.log(upLink, "link");
      // Add link to generics
      restoreArchive({
        data: upLink,
        data_type,
        user_id,
        topic_id: activeTopic.id,
        topic_title: activeTopic.topic_title,
      });
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
