import { IUserData, IUserEntity } from './interfaces/IUser';

export class User implements IUserEntity {
  private readonly _id: string;
  private readonly _username: string;
  private readonly _email: string;
  private readonly _password: string;
  private readonly _createdAt: number;
  private readonly _updatedAt: number;

  constructor(params: IUserData) {
    this._id = params.id;
    this._username = params.username;
    this._email = params.email;
    this._password = params.password;
    this._createdAt = params.createdAt;
    this._updatedAt = params.updatedAt;
  }

  get id() {
    return this._id;
  }

  get username() {
    return this._username;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }

  get createdAt() {
    return this._createdAt;
  }

  get updatedAt() {
    return this._updatedAt;
  }

  get data() {
    return {
      id: this._id,
      username: this._username,
      email: this._email,
      password: this._password,
      createdAt: this._createdAt,
      updatedAt: this._updatedAt,
    };
  }
}

export default User;
