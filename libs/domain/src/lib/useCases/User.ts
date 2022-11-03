import { FirebaseError } from 'firebase/app';
import { CreateUserDtoInput, CreateUserDtoOutput } from '../dto';
import { IUserUseCase } from './interfaces/IUser';
import { IUserRepository } from './repository-interfaces/IUser';

export class UserUseCase implements IUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(userDto: CreateUserDtoInput): Promise<CreateUserDtoOutput> {
    try {
      const { uid } = await this.userRepository.createUser(userDto);

      const user = await this.userRepository.getUserById(uid);

      const createdUser = new CreateUserDtoOutput(user);

      return createdUser;
    } catch (err) {
      const error = err as FirebaseError;

      throw Error(error.message);
    }
  }
}
