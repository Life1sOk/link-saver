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
  group_id: number;
}

export interface IGroupChange {
  id: number;
  new_title: string;
}

export interface IGroupDelete {
  id: number;
  user_id: number;
  group_id: number;
}
