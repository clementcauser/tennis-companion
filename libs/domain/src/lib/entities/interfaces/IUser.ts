import { IResource } from './IResource';

export interface IUserEntity extends IResource {
  id: string;
  username: string;
  email: string;
}

export interface IUserData extends IResource {
  id: string;
  username: string;
  email: string;
}
