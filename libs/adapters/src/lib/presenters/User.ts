import {
  CreateUserDtoInput,
  CreateUserDtoOutput,
  UserUseCase,
} from '@tennis-companion/domain';
import { IUserPresenter } from './interfaces';

export class UserPresenter implements IUserPresenter {
  constructor(private readonly useCases: UserUseCase) {}

  async createUser(userDto: CreateUserDtoInput): Promise<CreateUserDtoOutput> {
    return this.useCases.createUser(userDto);
  }
}
