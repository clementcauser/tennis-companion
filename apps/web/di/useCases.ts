import { UserUseCase } from '@tennis-companion/domain';
import { IRepositories } from './interfaces/IRepositories';
import { IUseCases } from './interfaces';

const useCases = (repositories: IRepositories): IUseCases => {
  return {
    user: new UserUseCase(repositories.user),
  };
};

export default useCases;
