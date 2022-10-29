import { FirebaseError } from 'firebase/app';
import { CreateUserDtoInput, CreateUserDtoOutput } from '../dto';
import { IUserUseCase } from './interfaces/IUser';
import { IUserRepository } from './repository-interfaces/IUser';

export class UserUseCase implements IUserUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async createUser(userDto: CreateUserDtoInput): Promise<CreateUserDtoOutput> {
    try {
      const user = await this.userRepository.createUser(userDto);

      const createdUser = new CreateUserDtoOutput({
        email: user?.email ?? '',
        id: user.uid,
        username: user?.displayName ?? user?.email ?? '',
        avatarURL: user?.photoURL ?? '',
      });

      return createdUser;
    } catch (err) {
      const error = err as FirebaseError;

      throw Error(error.message);
    }
  }
}
