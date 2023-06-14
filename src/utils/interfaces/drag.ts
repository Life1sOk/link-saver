import { IShortLink } from "./link";
import { IGroupGet } from "./group";

export type IEmpty = {
  type: null;
  data: null;
  from: null | "generics" | { group_id: number; group_index: number };
};

export type IDragLink = {
  type: "link";
  from: null | "generics" | { group_id: number; group_index: number };
  data: IShortLink;
};

export type IDragGroup = {
  type: "group";
  from: null | number;
  data: IGroupGet;
};

type IDragChildren = {
  children: string | JSX.Element | JSX.Element[];
};

type IFromGroupIndex = {
  group_index?: null;
};

export type IIntDrag =
  | (IDragLink & IFromGroupIndex)
  | (IDragGroup & IFromGroupIndex)
  | (IEmpty & IFromGroupIndex);
export type IDragWrapper = (IDragGroup & IDragChildren) | (IDragLink & IDragChildren);
