import {
  CreateUserDtoInput,
  CreateUserDtoOutput,
  User,
  UserUseCase,
} from '@tennis-companion/domain';
import { IUserPresenter } from './interfaces';

export class UserPresenter implements IUserPresenter {
  constructor(private readonly useCases: UserUseCase) {}

  async createUser(
    userInput: CreateUserDtoInput
  ): Promise<CreateUserDtoOutput> {
    const userOutput = await this.useCases.createUser(userInput);

    const user = new User(userOutput);

    return user;
  }
}
