import { IShortLink } from "./link";
import { IGroupGet } from "./group";

export interface IRestoreLinkArchive {
  data: IShortLink;
  user_id: number;
  data_type: "link";
  topic_id: number;
  topic_title: string;
}

export interface IRestoreGroupArchive {
  data: IGroupGet;
  user_id: number;
  data_type: "group";
  topic_id: number;
  topic_title: string;
}
