export interface ITopic {
  id: number;
  topic_title: string;
}

export interface ITopicAdd {
  acceptHandler: () => void;
  closeHandler: () => void;
}

export interface IPostTopic {
  user_id: number;
  topic_title: string;
}
