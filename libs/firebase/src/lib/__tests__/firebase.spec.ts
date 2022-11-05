import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { Firebase } from '../Firebase';

const fakeFirebaseConfig = {
  apiKey: 'kflsjflksdjfsdlfksjflkjsf',
  authDomain: 'sdfpojwpofjwepofjwpeojf',
  projectId: 'jpj23po4j',
  storageBucket: 'pfowjfpej0f02e0j2j',
  messagingSenderId: 'fpsjfposdjfpsojfposjdf',
  appId: 'pfsfpsodkfpsodkfpks',
};

const firebaseApp = initializeApp(fakeFirebaseConfig);

describe('Firebase class', () => {
  const firebaseInstance = new Firebase(fakeFirebaseConfig);

  beforeEach(() => {
    publicGetAuthMethod.mockClear();
    publicGetFirestoreMethod.mockClear();
  });

  const publicGetAuthMethod = jest
    .spyOn(firebaseInstance, 'getAuth')
    .mockImplementation(() => getAuth(firebaseApp));

  const publicGetFirestoreMethod = jest
    .spyOn(firebaseInstance, 'getFirestore')
    .mockImplementation(() => getFirestore(firebaseApp));

  it('should exist', () => {
    expect(firebaseInstance).toBeInstanceOf(Firebase);
  });

  it('should contains the "getAuth" method', () => {
    firebaseInstance.getAuth();

    expect(publicGetAuthMethod).toHaveBeenCalled();
  });

  it('should contains the "getFirestore" method', () => {
    firebaseInstance.getFirestore();

    expect(publicGetFirestoreMethod).toHaveBeenCalled();
  });
});
