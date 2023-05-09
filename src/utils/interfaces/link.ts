export interface ILink {
  user_id: number;
  group_id?: number | null;
  link_title: string;
  link_url: string;
}

export interface IShortLink {
  id: number;
  link_title: string;
  link_url: string;
  status: boolean;
}

export interface ILinkStatus {
  id: number;
  status: boolean;
}

export interface IAddGeneric {
  id: number;
  user_id: number;
  link_title: string;
  link_url: string;
  status: boolean;
}

export interface ITransGroup {
  data: IShortLink;
  group_index: number;
  group_id: number;
}
