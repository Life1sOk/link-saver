import { useAppDispatch } from "../../App/store/hooks";
import { activateGroup } from "../../App/store/slices/action-window.slice";

import { useGetGroupsLinksByTitleQuery } from "../../App/store/api/links";

import { icons } from "../../utils/react-icons";

import Link from "../../components/link/link.component";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import {
  GroupStyle,
  GroupHeader,
  Title,
  IconWrapper,
  LinksPlace,
} from "./group.style";

const GroupBlock = ({ title }: { title: string }) => {
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetGroupsLinksByTitleQuery({
    user_id: 17,
    group_title: title,
  });

  const activateGroupWindowHandler = () => {
    if (data) {
      dispatch(activateGroup({ title }));
    }
  };

  return (
    <GroupStyle>
      <GroupHeader>
        <Title>{title}</Title>
        <IconWrapper onClick={activateGroupWindowHandler}>
          {icons.open}
        </IconWrapper>
      </GroupHeader>
      <LinksPlace>
        {data?.map((link) => (
          <DotsLinkModal data={link} key={link.id} isActive>
            <Link data={link} />
          </DotsLinkModal>
        ))}
      </LinksPlace>
    </GroupStyle>
  );
};

export default GroupBlock;
