import { useAppSelector, useAppDispatch } from "../../App/store/hooks";
import { deactivateGroup } from "../../App/store/slices/action-window.slice";

import {
  useGetGroupsLinksByTitleQuery,
  useChangeGenericLinkGroupMutation,
} from "../../App/store/api/links";

import Link from "../../components/link/link.component";
import Button from "../../components/button/button.component";

import BlackWindowModal from "../../modals/black-window/black-window.modal";
import { GroupUpStyle, LinkWindow, ButtonsWrapper } from "./group-up.style";

const GroupUpBlock = () => {
  const dispatch = useAppDispatch();
  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);

  const [changeGroupLink, result] = useChangeGenericLinkGroupMutation();
  const { data, error, isLoading } = useGetGroupsLinksByTitleQuery({
    user_id: 17,
    group_title: activeGroup.title,
  });

  const deactivateGroupHandler = () => dispatch(deactivateGroup());

  const changeGroupLinkHandler = (link_id: number) =>
    changeGroupLink({ id: link_id, group_title: null });

  return (
    <BlackWindowModal isOpen={activeGroup.isActive}>
      <GroupUpStyle onClick={(e) => e.stopPropagation()}>
        <h3>{activeGroup.title}</h3>
        <LinkWindow>
          {data?.map((link) => (
            <Link
              data={link}
              key={link.id}
              type="transferGeneric"
              arrowActionHandler={changeGroupLinkHandler}
            />
          ))}
        </LinkWindow>
        <ButtonsWrapper>
          <Button name="Cancel" actionHandle={deactivateGroupHandler} />
          <Button name="Delete" />
          <Button name="Done" />
        </ButtonsWrapper>
      </GroupUpStyle>
    </BlackWindowModal>
  );
};

export default GroupUpBlock;
