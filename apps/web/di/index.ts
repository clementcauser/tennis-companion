import appPresenters from './presenters';
import appRepositories from './repositories';
import appUseCases from './useCases';
import infrastructures from './infrasctructures';

const appInfrastructures = infrastructures();
const repositories = appRepositories(appInfrastructures);
// eslint-disable-next-line react-hooks/rules-of-hooks
const useCases = appUseCases(repositories);
const presenters = appPresenters(useCases);

export default presenters;
