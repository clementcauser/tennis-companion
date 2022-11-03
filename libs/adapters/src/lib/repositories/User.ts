import {
  CreateUserDtoInput,
  IUserData,
  IUserRepository,
  User,
} from '@tennis-companion/domain';
import { Firebase, FirebasePath } from '@tennis-companion/firebase';
import { FirebaseError } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  User as FirebaseUser,
} from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export class UserRepository implements IUserRepository {
  constructor(private readonly firebase: Firebase) {}

  async createUser({
    email,
    password,
  }: CreateUserDtoInput): Promise<FirebaseUser> {
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

  async getUserById(id: string): Promise<User> {
    const firestore = this.firebase.getFirestore();

    try {
      const docRef = doc(firestore, FirebasePath.USERS, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();

        return new User(data as IUserData);
      } else {
        throw Error('User not found');
      }
    } catch (err) {
      const error = err as FirebaseError;

      throw Error(error.message);
    }
  }
}
