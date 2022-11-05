import {
  ICreateUserDtoInput,
  IUserRepository,
  User,
  UserUseCase,
} from '@tennis-companion/domain';
import { UserPresenter } from '../../presenters';

const FAKE_DATA = {
  uid: '490238402948',
  displayName: 'John Doe',
  email: 'john@doe.com',
};

class UserRepository implements IUserRepository {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createUserWithEmailAndPassword(userDTO: ICreateUserDtoInput): Promise<void> {
    return new Promise((resolve) => resolve());
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

const userRepository = new UserRepository();
const userUseCase = new UserUseCase(userRepository);
const userPresenter = new UserPresenter(userUseCase);

const createUserSpy = jest.spyOn(userUseCase, 'createUser');

beforeEach(() => {
  createUserSpy.mockClear();
});

describe('User Presenter', () => {
  it('triggers the "createUser" use case method', async () => {
    await userPresenter.createUser({
      email: FAKE_DATA.email,
      password: 'helloworld',
    });

    expect(createUserSpy).toBeCalled();
  });

  it('expects to return void', async () => {
    const result = await userPresenter.createUser({
      email: FAKE_DATA.email,
      password: 'helloworld',
    });

    expect(result).not.toBeDefined();
  });
});
