import { FirebasePath } from '@tennis-companion/firebase';
import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  Firestore as FirestoreInstance,
  FirestoreError,
  getDoc,
  getDocs,
  query,
  QueryConstraint,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import {
  ICollectionResults,
  ICreatedDocumentResult,
} from './interfaces/IFirestore';

export class Firestore {
  private firestore: FirestoreInstance;
  private path: FirebasePath;

  public isLoading = false;

  constructor(
    private readonly instance: FirestoreInstance,
    private readonly resourcePath: FirebasePath
  ) {
    this.firestore = instance;
    this.path = resourcePath;
  }

  async getDocumentById(resourceId: string): Promise<DocumentData> {
    try {
      this.isLoading = true;

      const docRef = doc(this.firestore, this.path, resourceId);
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        return snapshot.data();
      } else {
        throw Error('Document not found');
      }
    } catch (err) {
      const error = err as FirestoreError;

      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  async getDocuments(params?: QueryConstraint[]): Promise<ICollectionResults> {
    try {
      this.isLoading = true;

      const collectionRef = collection(this.firestore, this.path);
      const firestoreQuery = query(collectionRef, ...(params ?? []));
      const snapshot = await getDocs(firestoreQuery);

      const data = snapshot.docs.map((doc) => doc.data());

      return { data, total: snapshot.size };
    } catch (err) {
      const error = err as FirestoreError;

      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  async createDocument<Payload>(
    documentId: string,
    data: Payload
  ): Promise<ICreatedDocumentResult<Payload>> {
    try {
      this.isLoading = true;

      const payload: ICreatedDocumentResult<Payload> = {
        ...data,
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }; // TODO: add authoring

      const docRef = doc(this.firestore, this.path, documentId);

      await setDoc(docRef, payload);

      return payload;
    } catch (err) {
      const error = err as FirestoreError;

      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  async updateDocument<T>(documentId: string, data: T): Promise<T> {
    try {
      const payload = { ...data, updatedAt: Date.now() };

      const docRef = doc(this.firestore, this.path, documentId);
      await updateDoc(docRef, payload);

      return payload;
    } catch (err) {
      const error = err as FirestoreError;

      throw error;
    } finally {
      this.isLoading = false;
    }
  }

  async deleteDocument(documentId: string) {
    try {
      const docRef = doc(this.firestore, this.path, documentId);

      await deleteDoc(docRef);
    } catch (err) {
      const error = err as FirestoreError;

      throw error;
    } finally {
      this.isLoading = false;
    }
  }
}
