export interface CreateUserPayload {
    name: string;
    email: string;
    password: string;
  }
  
  export interface RegisterPayload extends CreateUserPayload {
    repeatPassword: string;
    repeatEmail: string;
  }