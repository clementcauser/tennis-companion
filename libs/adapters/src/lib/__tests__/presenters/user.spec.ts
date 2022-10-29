import {
  CreateUserDtoOutput,
  ICreateUserDtoInput,
  IUserRepository,
  UserUseCase,
} from '@tennis-companion/domain';
import { User } from 'firebase/auth';
import { UserPresenter } from '../../presenters';

const FAKE_DATA = {
  uid: '490238402948',
  displayName: 'John Doe',
  email: 'john@doe.com',
};

class UserRepository implements IUserRepository {
  createUser(userDTO: ICreateUserDtoInput): Promise<User> {
    return new Promise((resolve) =>
      resolve({ ...FAKE_DATA, email: userDTO.email } as User)
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

  it('expects to return a user', async () => {
    const result = await userPresenter.createUser({
      email: FAKE_DATA.email,
      password: 'helloworld',
    });

    const expectedResult = new CreateUserDtoOutput({
      email: FAKE_DATA.email,
      id: FAKE_DATA.uid,
      username: FAKE_DATA.displayName,
      avatarURL: '',
    });

    expect(result).toStrictEqual(expectedResult);
  });
});
