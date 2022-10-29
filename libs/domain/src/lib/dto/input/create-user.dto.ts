export interface ICreateUserDtoInput {
  email: string;
  password: string;
}

export class CreateUserDtoInput {
  email: string;
  password: string;

  constructor(params: ICreateUserDtoInput) {
    this.email = params.email;
    this.password = params.password;
  }
}
