import { useEffect, useCallback, useState, useId, memo, forwardRef } from "react";

import { icons } from "../../utils/react-icons";

import { useAppSelector } from "../../App/store/hooks";
import { IShortLink } from "../../utils/interfaces/link";

import { useGroupsLogic } from "../../utils/contollers/useGroupsLogic";
import { useLinkLogic } from "../../utils/contollers/useLinkLogic";

import GroupBlock from "../../blocks/group/group.block";
import TitleSection from "../../components/title-section/title-section.component";

import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";
import { IGroupGet, IGroupItemPosition } from "../../utils/interfaces/group";
import { ITopic } from "../../utils/interfaces/topic";

import Blank from "../../components/blank/blank-section.modal";
import { GroupsStyle, SpinnerWrapper, GroupsWrapper } from "./groups.style";

const GroupsSection = memo(
  forwardRef<HTMLDivElement, { clmCount: number; localGroups: IGroupGet[] }>(
    ({ clmCount, localGroups }, ref) => {
      const uniqueId = useId();
      // Listening 'active topic' on change it re-render;
      const { id, topic_title } = useAppSelector(
        (state) => state.topicsLocal.window.activeTopic
      );
      const user_id = useAppSelector((state) => state.auth.session.user_id);
      const isGroupPull = useAppSelector((state) => state.groupsLocal.pull);

      // -------------------- Calc grid ------------------- //
      const [gridPosition, setGridPosition] = useState<IGroupItemPosition[]>([]);

      const [rowCount, setRowCount] = useState(1);

      const calcPosition = useCallback((clmCount: number, array: any) => {
        const positions: IGroupItemPosition[] = [];
        let maxRowCount = 1;

        const compareRowCount = (maxRows: number) => {
          if (maxRowCount < maxRows) maxRowCount = maxRows;
        };

        // 1st item position;
        const firstRowItems = (index: number) => {
          if (array[index]?.links && array[index].links.length < 3) {
            positions.push({ start: 1, end: 5 });
            compareRowCount(5);
          } else {
            const prepEnd: number = array[index]?.links.length - 2 + 5;
            positions.push({ start: 1, end: prepEnd });
            compareRowCount(prepEnd);
          }
        };

        if (clmCount === 1) {
          firstRowItems(0);
        } else if (clmCount === 2) {
          firstRowItems(0);
          firstRowItems(1);
        } else if (clmCount === 3) {
          firstRowItems(0);
          firstRowItems(1);
          firstRowItems(2);
        }

        // Other
        for (let i = clmCount; i < array.length; i++) {
          if (array[i].links && array[i].links.length < 3) {
            const generStart: number = positions[i - clmCount].end + 1;
            const prepEnd: number = generStart + 4;

            positions.push({ start: generStart, end: prepEnd });
            compareRowCount(prepEnd);
          } else {
            const generStart: number = positions[i - clmCount].end + 1;
            const prepEnd: number = generStart + 4 + array[i].links.length - 2;

            positions.push({ start: generStart, end: prepEnd });
            compareRowCount(prepEnd);
          }
        }

        setRowCount(maxRowCount);

        return positions;
      }, []);

      // ------------- Logic hooks takes actions and state -------------- //
      const { getGroupsStore, getGroupsStoreResult, deleteGroup, transitionToTopic } =
        useGroupsLogic();
      const { linkTransitionToGeneric, deleteGroupLink } = useLinkLogic();

      const deleteGroupHandler = (group_id: number, data: IGroupGet) =>
        deleteGroup(user_id, group_id, data, topic_title);

      const deleteGroupLinkHandler = (data: IShortLink, index: number) =>
        deleteGroupLink(data, index, user_id);

      const transitionToGenericsHandler = (data: IShortLink, index: number) =>
        linkTransitionToGeneric(data, index);

      const transitionToTopicHandler = (topic: ITopic, group: IGroupGet) =>
        transitionToTopic(topic, group, topic_title);

      // --------------------------------------------- //
      useEffect(() => {
        if (isGroupPull) getGroupsStore(id, user_id);
      }, [id, user_id, isGroupPull]);

      useEffect(() => {
        if (localGroups) setGridPosition(calcPosition(clmCount, localGroups));
      }, [clmCount, localGroups]);
      // --------------------------------------------- //

      if (getGroupsStoreResult.isFetching) {
        return (
          <GroupsStyle>
            <TitleSection title={topic_title} sectionType="group" count={0} />
            <SpinnerWrapper>
              <LoadingSpinner />
            </SpinnerWrapper>
          </GroupsStyle>
        );
      }

      return (
        <GroupsStyle>
          <TitleSection
            title={topic_title}
            sectionType="group"
            count={localGroups.length}
          />
          <GroupsWrapper ref={ref} rowsCount={rowCount} clmCount={clmCount}>
            {localGroups.length > 0 ? (
              localGroups.map((group, index) => (
                <GroupBlock
                  key={uniqueId + index}
                  data={group}
                  group_index={index}
                  gridRow={`${gridPosition[index]?.start} / ${gridPosition[index]?.end}`}
                  transitionLink={transitionToGenericsHandler}
                  transitionGroup={transitionToTopicHandler}
                  deleteLinkHandler={deleteGroupLinkHandler}
                  deleteGroupHandler={deleteGroupHandler}
                />
              ))
            ) : (
              <Blank title="groups" icon={icons.group} />
            )}
          </GroupsWrapper>
        </GroupsStyle>
      );
    }
  )
);

export default GroupsSection;
