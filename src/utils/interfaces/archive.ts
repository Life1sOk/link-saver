import { IShortLink } from "./link";
import { IGroupGet } from "./group";

export interface IDeleteLinkArchive {
  data: IShortLink;
  user_id: number;
  data_type: "link";
}

export interface IDeleteGroupArchive {
  data: IGroupGet;
  user_id: number;
  data_type: "group";
}
