export interface IGroupGet {
  id?: number;
  group_title: string;
}

export interface IGroupPost {
  topic_id: number;
  group_title: string;
}

export interface IGroupLink {
  user_id: number;
  group_title: string;
}
