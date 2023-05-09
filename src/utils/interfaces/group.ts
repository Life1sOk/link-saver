import { IShortLink } from "./link";

export interface IGroupGet {
  id: number;
  group_title: string;
  links: IShortLink[];
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
}

export interface IAddGroup {
  id: number;
  topic_id: number;
  user_id: number;
  group_title: string;
  links: never[];
}
