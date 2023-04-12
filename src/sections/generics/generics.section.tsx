import { useAppSelector } from "../../App/store/hooks";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeGenericLinkGroupMutation,
} from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";

import DotsLinkModal from "../../modals/dots-link/dots-link.modal";
import { GenericsStyle } from "./generics.style";

const GenericsSection = () => {
  const activeGroup = useAppSelector((state) => state.actionWindow.activeGroup);

  const { data, error, isLoading } = useGetGenericLinksByUserIdQuery(17);
  const [changeGroupLink, result] = useChangeGenericLinkGroupMutation();

  const changeGroupLinkHandler = (link_id: number) =>
    changeGroupLink({ id: link_id, group_title: activeGroup.title });

  return (
    <>
      <LinkAddBlock />
      <GenericsStyle>
        <h1>Generic Links</h1>
        {data?.map((current) => (
          <DotsLinkModal
            data={current}
            key={current.id}
            isActive={!activeGroup.isActive}
          >
            <Link
              data={current}
              type={activeGroup.isActive ? "transferGroup" : null}
              arrowActionHandler={changeGroupLinkHandler}
            />
          </DotsLinkModal>
        ))}
      </GenericsStyle>
    </>
  );
};

export default GenericsSection;
