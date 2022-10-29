import { ICreateUserDtoInput, ICreateUserDtoOutput } from '../../dto';

export interface IUserUseCase {
  createUser(userDto: ICreateUserDtoInput): Promise<ICreateUserDtoOutput>;
}
