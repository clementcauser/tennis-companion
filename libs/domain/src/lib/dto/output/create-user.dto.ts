export interface ICreateUserDtoOutput {
  id: string;
  email: string;
  username: string;
  avatarURL?: string;
  createdAt: number;
  updatedAt: number;
}

export class CreateUserDtoOutput {
  id: string;
  email: string;
  username: string;
  avatarURL?: string;
  createdAt: number;
  updatedAt: number;

  constructor(params: ICreateUserDtoOutput) {
    this.id = params.id;
    this.email = params.email;
    this.username = params.username;
    this.avatarURL = params.avatarURL;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
