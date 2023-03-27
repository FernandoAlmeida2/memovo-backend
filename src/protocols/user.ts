export type NewUser = {
  name: string;
  email: string;
  password: string;
};

export type SignInParams = Omit<NewUser, "name">;