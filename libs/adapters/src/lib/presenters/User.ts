import {
  CreateUserDtoInput,
  ICreateUserDtoOutput,
  UserUseCase,
} from '@tennis-companion/domain';
import { FirebaseError } from 'firebase/app';
import { IUserPresenter } from './interfaces';

export class UserPresenter implements IUserPresenter {
  constructor(private readonly useCases: UserUseCase) {}

  async createUser(
    userInput: CreateUserDtoInput
  ): Promise<ICreateUserDtoOutput> {
    try {
      return this.useCases.createUser(userInput);
    } catch (error) {
      const { message } = error as FirebaseError;

      throw Error(message);
    }
  }
}
