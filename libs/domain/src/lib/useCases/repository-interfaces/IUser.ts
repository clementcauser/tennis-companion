import { ICreateUserDtoInput, ICreateUserDtoOutput } from '../../dto';
import { User } from '../../entities';

export interface IUserRepository {
  createUserWithEmailAndPassword(
    userDTO: ICreateUserDtoInput
  ): Promise<ICreateUserDtoOutput>;

  getUserById(id: string): Promise<User>;
}
