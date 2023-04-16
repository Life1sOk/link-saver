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
}

export interface ILinkGeneric {
  data: IShortLink;
  type?: string | null;
  arrowActionHandler?: (arg: number) => void;
  isActive?: boolean;
}
