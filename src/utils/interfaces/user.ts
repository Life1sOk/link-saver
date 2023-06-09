export interface IUser {
  id: number;
  username: string;
  email: string;
  status?: string;
}

export interface IUserFrom {
  username: string | null;
  email: string | null;
}

export interface IUserTrans {
  id: number;
  username: string;
  email: string;
  status?: string;
  friend_id: number;
}

export interface IUserRegistration {
  username: string;
  email: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserToken {
  token: string;
}

export interface IUserTokenResponse {
  success: boolean;
  user_id: number;
}

export interface IUsersSeach {
  user: number;
  value: string;
}
