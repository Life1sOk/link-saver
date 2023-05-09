export interface ITopic {
  id: number;
  user_id: number;
  topic_title: string;
  created_at?: string;
}

export interface ITopicAdd {
  acceptHandler: () => void;
  closeHandler: () => void;
}

export interface IPostTopic {
  user_id: number;
  topic_title: string;
}
