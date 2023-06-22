import { useState } from "react";
import { StatusStyle, Count } from "./status.style";

import { IShortLink } from "../../../utils/interfaces/link";

interface IStatusProp {
  array: IShortLink[];
  actionHandler: (active: "done" | "regular" | "total") => void;
}

interface IStatus {
  title: string;
  type: "done" | "regular" | "total";
}

const status: IStatus[] = [
  { title: "Tital links", type: "total" },
  { title: "Done links", type: "done" },
  { title: "Regular links", type: "regular" },
];

const Status = ({ array, actionHandler }: IStatusProp) => {
  const [current, setCurrent] = useState("total");

  let total = array?.length;
  let done = 0;
  let regular = 0;

  for (let i = 0; i < array?.length; i++) {
    if (array[i].status) done++;
    if (!array[i].status) regular++;
  }

  const activateCurrent = (current: "done" | "regular" | "total") => {
    actionHandler(current);
    setCurrent(current);
  };

  return (
    <StatusStyle>
      {status.map(({ title, type }) => (
        <Count
          key={title}
          title={title}
          type={type}
          isActive={current === type}
          onClick={() => activateCurrent(type)}
        >
          {type === "total" && total}
          {type === "regular" && regular}
          {type === "done" && done}
        </Count>
      ))}
    </StatusStyle>
  );
};

export default Status;
