import { useAppSelector } from "../../App/store/hooks";

import {
  useGetGenericLinksByUserIdQuery,
  useChangeGenericLinkGroupMutation,
} from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";
import Link from "../../components/link/link.component";

import { GenericsStyle } from "./generics.style";

const GenericsSection = () => {
  const activeGroup = useAppSelector((state) => state.activeGroup.current);

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
          <Link
            data={current}
            key={current.id}
            type={activeGroup.isActive ? "transferGroup" : null}
            arrowActionHandler={changeGroupLinkHandler}
          />
        ))}
      </GenericsStyle>
    </>
  );
};

export default GenericsSection;
