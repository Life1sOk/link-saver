import { forwardRef } from "react";

import { icons } from "../../utils/react-icons";

import { ITopicAdd } from "../../utils/interfaces/topic";

import { TopicAddStyle } from "./topic-add.style";

const TopicAdd = forwardRef<HTMLInputElement, ITopicAdd>(
  ({ acceptHandler, closeHandler }, ref) => {
    return (
      <TopicAddStyle>
        {icons.topicAdd}
        <input type="text" ref={ref} />
        <button onClick={acceptHandler}>Y</button>
        <button onClick={closeHandler}>X</button>
      </TopicAddStyle>
    );
  }
);

export default TopicAdd;
