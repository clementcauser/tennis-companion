import {
  CreateUserDtoInput,
  ICreateUserDtoOutput,
} from '@tennis-companion/domain';

export interface IUserPresenter {
  createUser(userDto: CreateUserDtoInput): Promise<ICreateUserDtoOutput>;
}
