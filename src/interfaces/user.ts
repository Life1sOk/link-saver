export interface IUser {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    password: string,
}

interface AuthResponse {
    token: string;
  }