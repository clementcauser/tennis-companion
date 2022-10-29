import { DocumentData } from 'firebase/firestore';

export interface ICollectionResults {
  data: DocumentData[];
  total: number;
}

export type ICreatedDocumentResult<Payload> = Payload & {
  createdAt: number;
  updatedAt: number;
};
