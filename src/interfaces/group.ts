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

export interface IGroupChange {
  id: number;
  user_id: number;
  new_title: string;
  old_title: string;
}

export interface IGroupDelete {
  id: number;
  user_id: number;
  group_title: string;
}
