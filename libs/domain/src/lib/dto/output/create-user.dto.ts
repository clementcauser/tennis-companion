export interface ICreateUserDtoOutput {
  id: string;
  email: string;
  username?: string;
  avatarURL?: string;
}

export class CreateUserDtoOutput {
  id: string;
  email: string;
  username?: string;
  avatarURL?: string;

  constructor(params: ICreateUserDtoOutput) {
    this.id = params.id;
    this.email = params.email;
    this.username = params.username;
    this.avatarURL = params.avatarURL;
  }
}
