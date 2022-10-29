import { User } from 'firebase/auth';
import { ICreateUserDtoInput } from '../../dto';

export interface IUserRepository {
  createUser(userDTO: ICreateUserDtoInput): Promise<User>;
}
