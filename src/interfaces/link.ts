export interface ILink {
  user_id: number;
  group_title?: string | null;
  link_title: string;
  link_url: string;
}

export interface IShortLink {
  id: number;
  link_title: string;
  link_url: string;
}
