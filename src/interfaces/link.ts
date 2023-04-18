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
  status: number | string;
}

export interface ILinkStatus {
  id: number;
  status: number;
}
