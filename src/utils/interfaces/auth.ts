export interface IAuthResponse {
  success: boolean;
  token: string;
  user_id: number;
}

export type TSectionState =
  | "login"
  | "registration"
  | "verify"
  | "error"
  | "email"
  | "reset";

export interface ISectionChange {
  changeBlock: (block: TSectionState) => void;
}
