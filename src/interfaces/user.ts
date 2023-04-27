export interface IUser {
  id: number;
  username: string;
  email: string;
  created_at: string;
}

export interface IUserRegistration {
  //   first_name?: string;
  //   last_name?: string;
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
