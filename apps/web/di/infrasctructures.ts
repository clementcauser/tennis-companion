import { Firebase } from '@tennis-companion/firebase';
import { firebaseConfig } from '../config';
import { IInfrastructures } from './interfaces';

const infrastructures = (): IInfrastructures => {
  return {
    firebase: new Firebase(firebaseConfig),
  };
};

export default infrastructures;
