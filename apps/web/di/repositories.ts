import { UserRepository } from '@tennis-companion/adapters';
import { IInfrastructures, IRepositories } from './interfaces';

const repositories = (infrastructures: IInfrastructures): IRepositories => {
  return {
    user: new UserRepository(infrastructures.firebase),
  };
};

export default repositories;
