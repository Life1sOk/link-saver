export interface IUser {
  id: number;
  username: string;
  email: string;
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

export interface IAuthResponse {
  success: boolean;
  token: string;
  user_id: number;
}

export interface IUsersSeach {
  user: number;
  value: string;
}
