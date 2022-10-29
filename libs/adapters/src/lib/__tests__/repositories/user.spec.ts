import { ICreateUserDtoInput } from '@tennis-companion/domain';
import { Firebase } from '@tennis-companion/firebase';
import { User } from 'firebase/auth';
import { UserRepository } from '../../repositories';

const fakeFirebaseConfig = {
  apiKey: 'kflsjflksdjfsdlfksjflkjsf',
  authDomain: 'sdfpojwpofjwepofjwpeojf',
  projectId: 'jpj23po4j',
  storageBucket: 'pfowjfpej0f02e0j2j',
  messagingSenderId: 'fpsjfposdjfpsojfposjdf',
  appId: 'pfsfpsodkfpsodkfpks',
};

const createUserPayload: ICreateUserDtoInput = {
  email: 'john@doe.com',
  password: '123qewasd',
};

const firebaseInstance = new Firebase(fakeFirebaseConfig);
const userRepository = new UserRepository(firebaseInstance);
const createUserSpy = jest
  .spyOn(userRepository, 'createUser')
  .mockImplementation(async ({ email }) => {
    return {
      email,
      displayName: 'john doe',
      uid: 'zxcasdqwe123',
    } as User;
  });

beforeEach(() => {
  createUserSpy.mockClear();
});

describe('User Repository', () => {
  it('returns a user when "createUser" method is executed', async () => {
    const results = await userRepository.createUser(createUserPayload);

    expect(createUserSpy).toHaveBeenCalled();

    expect(results.email).toBe(createUserPayload.email);
    expect(results.uid).toBe('zxcasdqwe123');
    expect(results.displayName).toBe('john doe');
  });
});
