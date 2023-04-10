import { useAppSelector } from "../../App/store/hooks";

import { useGetGenericLinksByTopicIdQuery } from "../../App/store/api/links";

import LinkAddBlock from "../../blocks/link-add/link-add.block";

import { GenericsStyle } from "./generics.style";

const GenericsSection = () => {
  // Listening 'active topic' on change it re-render;
  const { id, topic_title } = useAppSelector(
    (state) => state.activeTopic.current
  );

  const { data, error, isLoading } = useGetGenericLinksByTopicIdQuery(id);

  // console.log(activeTopic, "generics");
  console.log(data, "check");

  return (
    <>
      <LinkAddBlock />
      <GenericsStyle>
        <h1>Link's {topic_title}</h1>
      </GenericsStyle>
    </>
  );
};

export default GenericsSection;
