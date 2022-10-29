import { CreateUserDtoInput, IUserRepository } from '@tennis-companion/domain';
import { Firebase } from '@tennis-companion/firebase';
import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, User } from 'firebase/auth';

export class UserRepository implements IUserRepository {
  constructor(private readonly firebase: Firebase) {}

  async createUser({ email, password }: CreateUserDtoInput): Promise<User> {
    const firebaseAuth = this.firebase.getAuth();

    try {
      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      return user;
    } catch (err) {
      const error = err as FirebaseError;

      throw Error(error.message);
    }
  }
}
