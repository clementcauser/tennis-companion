import { UserPresenter } from '@tennis-companion/adapters';
import { IPresenters, IUseCases } from './interfaces';

const presenters = (usecases: IUseCases): IPresenters => {
  return {
    user: new UserPresenter(usecases.user),
  };
};

export default presenters;
