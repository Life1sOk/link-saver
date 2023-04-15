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

interface AuthResponse {
  token: string;
}
