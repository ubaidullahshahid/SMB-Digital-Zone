export interface User {
  email: string;
  _id: string;
}

export interface AuthState {
  userLoading: boolean;
  authLoading: boolean;
  user: User;
}
