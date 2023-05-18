import { NewCountStyle, Count } from "./new-count.style";

interface INewCount {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  count: number | undefined;
}

const NewCount = ({ count, left, right, top, bottom }: INewCount) => {
  if (!count || count === 0) return <></>;

  return (
    <NewCountStyle left={left} right={right} top={top} bottom={bottom}>
      <Count>{count}</Count>
    </NewCountStyle>
  );
};

export default NewCount;
