import { User } from 'firebase/auth';
import {
  CreateUserDtoInput,
  CreateUserDtoOutput,
  ICreateUserDtoInput,
} from '../../dto';
import { IUserRepository, UserUseCase } from '../../useCases';

class Repository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  createUser(dto: ICreateUserDtoInput): Promise<User> {
    return new Promise((resolve) =>
      resolve({
        email: dto.email,
        displayName: 'John',
        uid: '123qweasdzxc',
      } as User)
    );
  }
}

const userDto = new CreateUserDtoInput({
  email: 'hello@world.com',
  password: '9084324kj230-49iu23',
});

const userRepository = new Repository();
const userUsecase = new UserUseCase(userRepository);

const spy = jest
  .spyOn(userRepository, 'createUser')
  .mockImplementation(async ({ email }) => {
    return {
      email,
      displayName: 'John Doe',
      uid: '490382409238',
    } as User;
  });

beforeEach(() => {
  spy.mockClear();
});

describe('User useCase', () => {
  describe('I can create a user', () => {
    it("calls the user repository's createUser method", async () => {
      await userUsecase.createUser(userDto);

      expect(spy).toBeCalled();
    });

    it('should return a user', async () => {
      const result = await userUsecase.createUser(userDto);
      const expectedResult = new CreateUserDtoOutput({
        email: 'hello@world.com',
        id: '490382409238',
        username: 'John Doe',
        avatarURL: '',
      });

      expect(result).toStrictEqual(expectedResult);
    });
  });
});
