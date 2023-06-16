import { StatusStyle, Count } from "./status.style";

import { IShortLink } from "../../../utils/interfaces/link";

interface IStatus {
  array: IShortLink[];
}

const Status = ({ array }: IStatus) => {
  let total = array.length;
  let done = 0;
  let regular = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i].status) done++;
    if (!array[i].status) regular++;
  }

  return (
    <StatusStyle>
      <Count title="Total links" type="one">
        {total}
      </Count>
      <Count title="Done links" type="two">
        {done}
      </Count>
      <Count title="Regular links" type="three">
        {regular}
      </Count>
    </StatusStyle>
  );
};

export default Status;
