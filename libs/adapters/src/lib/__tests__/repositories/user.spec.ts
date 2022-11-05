import { ICreateUserDtoInput } from '@tennis-companion/domain';
import { Firebase } from '@tennis-companion/firebase';
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
  .spyOn(userRepository, 'createUserWithEmailAndPassword')
  .mockImplementation(async () => {
    return;
  });

beforeEach(() => {
  createUserSpy.mockClear();
});

describe('User Repository', () => {
  it('returns void when "createUser" method is executed', async () => {
    const results = await userRepository.createUserWithEmailAndPassword(
      createUserPayload
    );

    expect(createUserSpy).toHaveBeenCalled();
    expect(results).not.toBeDefined();
  });
});
