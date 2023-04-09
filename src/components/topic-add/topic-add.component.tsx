import { forwardRef } from "react";

import { AiFillFolderAdd } from "react-icons/ai";

import { ITopicAdd } from "../../interfaces/topic";

import { TopicAddStyle } from "./topic-add.style";

const TopicAdd = forwardRef<HTMLInputElement, ITopicAdd>(
  ({ acceptHandler, closeHandler }, ref) => {
    return (
      <TopicAddStyle>
        <AiFillFolderAdd />
        <input type="text" ref={ref} />
        <button onClick={acceptHandler}>Y</button>
        <button onClick={closeHandler}>X</button>
      </TopicAddStyle>
    );
  }
);

export default TopicAdd;
