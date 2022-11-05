import { CreateUserDtoInput, ICreateUserDtoInput } from '../../dto';
import { User } from '../../entities';
import { IUserRepository, UserUseCase } from '../../useCases';

class Repository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUserWithEmailAndPassword(userDTO: ICreateUserDtoInput): Promise<void> {
    return new Promise((resolve) => resolve);
  }

  getUserById(id: string): Promise<User> {
    return new Promise((resolve) =>
      resolve(
        new User({
          createdAt: 1667652710221,
          email: 'some@email.com',
          id,
          updatedAt: 1667652710221,
          username: 'testUser',
        })
      )
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
  .spyOn(userRepository, 'createUserWithEmailAndPassword')
  .mockImplementation(async () => {
    return;
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

    it('should return void', async () => {
      const result = await userUsecase.createUser(userDto);

      expect(result).not.toBeDefined();
    });
  });
});
