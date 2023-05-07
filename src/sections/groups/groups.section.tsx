import { useEffect } from "react";

import { useAppSelector } from "../../App/store/hooks";
import { IShortLink } from "../../interfaces/link";

import { useGroupLocal } from "../../utils/hooks/useGroupLocal";
import { useGenericLocal } from "../../utils/hooks/useGenericLocal";
import { useRequestProcess } from "../../utils/hooks/useRequestProcess";

import {
  useLazyGetGroupsByTopicIdQuery,
  useDeleteGroupMutation,
} from "../../App/store/api/groups";
import {
  useDeleteLinkSnapshotMutation,
  useChangeLinkGroupTitleMutation,
} from "../../App/store/api/links";

import GroupBlock from "../../blocks/group/group.block";
import GroupAddBlock from "../../blocks/group-add/group-add.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

import BlankModal from "../../modals/blank/blank-section.modal";
import { GroupsStyle, SpinnerWrapper, GroupsWrapper } from "./groups.style";
import { IGroupGet } from "../../interfaces/group";

const GroupsSection = () => {
  const localGroups = useAppSelector((state) => state.groupsLocal.data);

  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.topicsLocal.window.activeTopic
  );

  const user_id = useAppSelector((state) => state.user.session.user_id);

  const {
    addAllGroupsLocal,
    addOneGroupLocal,
    deleteGroupLocal,
    deleteGroupLinkLocal,
    addGroupLinkLocal,
  } = useGroupLocal();
  const { addOneGenericLocal, deleteOneGenericLocal } = useGenericLocal();

  const [getGroupsApi, getGroupsApiResult] = useLazyGetGroupsByTopicIdQuery();
  useRequestProcess(getGroupsApiResult);

  const [changeGroupLinkApi, changeGroupLinkApiResult] =
    useChangeLinkGroupTitleMutation();
  // Handler status
  useRequestProcess(changeGroupLinkApiResult);

  const [deleteSnapshotApi, deleteSnapshotApiResult] = useDeleteLinkSnapshotMutation();
  useRequestProcess(deleteSnapshotApiResult);

  const [deleteGroupApi, deleteGroupApiResult] = useDeleteGroupMutation();
  useRequestProcess(deleteGroupApiResult);

  // Delete Group local/serv
  const deleteGroupHandler = async (group_id: number, data: IGroupGet) => {
    // local
    deleteGroupLocal(group_id);

    await deleteGroupApi({
      id: group_id,
      user_id,
    })
      .unwrap()
      .catch((err) => {
        if (err) {
          // Back changes
          addOneGroupLocal(data);
        }
      });
  };

  // Need local changes
  const transitionToGenerics = async (data: IShortLink, index: number) => {
    // Local change - removee from group
    deleteGroupLinkLocal({ link_id: data.id, index });
    // Local change - add to generics
    addOneGenericLocal(data);
    // // Server change
    await changeGroupLinkApi({ id: data.id, group_id: null })
      .unwrap()
      .catch((err) => {
        if (err) {
          deleteOneGenericLocal(data.id);
          addGroupLinkLocal({ link_data: data, index });
        }
      });
  };

  const deleteGroupLinkHandler = async (
    data: IShortLink,
    index: number,
    link_id: number
  ) => {
    // Local
    deleteGroupLinkLocal({ link_id, index });
    // Server
    await deleteSnapshotApi({ id: link_id })
      .unwrap()
      .catch((err) => {
        // Back changes
        if (err) {
          addGroupLinkLocal({ link_data: data, index });
        }
      });
  };

  useEffect(() => {
    const serverToLocalGroup = async () => {
      let ids = {
        topic_id: id,
        user_id,
      };
      getGroupsApi(ids)
        .unwrap()
        .then((data) => addAllGroupsLocal(data));
    };
    serverToLocalGroup();
  }, [id]);

  if (getGroupsApiResult.isFetching) {
    return (
      <GroupsStyle>
        <TitleSection title={topic_title} color="#ff7565" />
        <SpinnerWrapper>
          <LoadingSpinner />
        </SpinnerWrapper>
      </GroupsStyle>
    );
  }

  if (getGroupsApiResult.isError) {
    return (
      <GroupsStyle>
        <TitleSection title={topic_title} color="#ff7565" />
        <SpinnerWrapper>
          <h4>No connection!</h4>
        </SpinnerWrapper>
      </GroupsStyle>
    );
  }

  return (
    <>
      <GroupAddBlock />
      <GroupsStyle>
        <TitleSection title={topic_title} color="#ff7565" />
        <GroupsWrapper>
          {localGroups.length > 0 ? (
            localGroups.map((group, index) => (
              <GroupBlock
                key={group.id}
                data={group}
                index={index}
                transitionLink={transitionToGenerics}
                deleteLinkHandler={deleteGroupLinkHandler}
                deleteGroupHandler={deleteGroupHandler}
              />
            ))
          ) : (
            <BlankModal title="Add group" color="#ff7565" />
          )}
        </GroupsWrapper>
      </GroupsStyle>
    </>
  );
};

export default GroupsSection;
