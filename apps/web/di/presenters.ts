import { UserPresenter } from '@tennis-companion/adapters';
import { IUseCases } from './interfaces';

const presenters = (usecases: IUseCases) => {
  return {
    user: new UserPresenter(usecases.user),
  };
};

export default presenters;
