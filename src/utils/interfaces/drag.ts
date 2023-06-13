import { IShortLink } from "./link";
import { IGroupGet } from "./group";

export type IEmpty = {
  type: null;
  data: null;
};

export type IDragLink = {
  type: "link";
  data: IShortLink;
};

export type IDragGroup = {
  type: "group";
  data: IGroupGet;
};

type IDragChildren = {
  children: string | JSX.Element | JSX.Element[];
};

export type IIntDrag = IDragLink | IDragGroup | IEmpty;
export type IDragWrapper = (IDragGroup & IDragChildren) | (IDragLink & IDragChildren);
