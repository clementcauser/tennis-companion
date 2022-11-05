import { FirebaseError } from 'firebase/app';
import { CreateUserDtoInput, ICreateUserDtoOutput } from '../dto';
import { IUserUseCase } from './interfaces/IUser';
import { IUserRepository } from './repository-interfaces/IUser';

export class UserUseCase implements IUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(userDto: CreateUserDtoInput): Promise<ICreateUserDtoOutput> {
    try {
      return this.userRepository.createUserWithEmailAndPassword(userDto);
    } catch (err) {
      const { message } = err as FirebaseError;

      throw Error(message);
    }
  }
}
