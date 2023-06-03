import { StatusStyle, Count } from "./status.style";

const Status = () => {
  return (
    <StatusStyle>
      <Count title="Total links" type="one">
        12
      </Count>
      <Count title="Active links" type="two">
        3
      </Count>
      <Count title="No-active links" type="three">
        9
      </Count>
    </StatusStyle>
  );
};

export default Status;
