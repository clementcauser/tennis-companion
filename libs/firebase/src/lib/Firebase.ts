import { FirebaseOptions, initializeApp } from 'firebase/app';
import { Auth, getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from 'firebase/firestore';

export class Firebase {
  private auth: Auth;
  private firestore: Firestore;

  constructor(firebaseOptions: FirebaseOptions) {
    const app = initializeApp(firebaseOptions);
    this.auth = getAuth(app);
    this.firestore = getFirestore(app);
  }

  public getAuth() {
    return this.auth;
  }

  public getFirestore() {
    return this.firestore;
  }
}
