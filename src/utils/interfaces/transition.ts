import { IUserFrom } from "./user";
import { IGroupGet } from "./group";

export interface ITransRece {
  from: IUserFrom;
  group: IGroupGet;
  transition_id: number;
}
