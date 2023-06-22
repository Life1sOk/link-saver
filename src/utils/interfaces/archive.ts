import { IShortLink } from "./link";
import { IGroupGet } from "./group";

type IActiveTopic = {
  topic_id: number;
  topic_title: string;
};

export type ILinkArchive = {
  data: IShortLink;
  user_id: number;
  data_type: "link";
};

export type IGroupArchive = {
  data: IGroupGet;
  user_id: number;
  data_type: "group";
};

export type IRestoreLinkArchive = ILinkArchive & IActiveTopic;
export type IRestoreGroupArchive = IGroupArchive & IActiveTopic;
