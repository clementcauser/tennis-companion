import { ICreateUserDtoInput } from '../../dto';

export interface IUserUseCase {
  createUser(userDto: ICreateUserDtoInput): Promise<void>;
}
