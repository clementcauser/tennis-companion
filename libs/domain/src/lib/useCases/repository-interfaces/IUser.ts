import { User as firebaseUser } from 'firebase/auth';
import { ICreateUserDtoInput } from '../../dto';
import { User } from '../../entities';

export interface IUserRepository {
  createUser(userDTO: ICreateUserDtoInput): Promise<firebaseUser>;
  getUserById(id: string): Promise<User>;
}
