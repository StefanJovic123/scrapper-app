import Users from './Users';
import Auth from './Auth';
import EconomistScraper from './EconomistScraper';

export default (services, cache) => ({
  UsersUseCases: Users(services.UsersService),
  AuthUseCases: Auth(services.AuthService),
  EconomistScraperUseCases: EconomistScraper(services.EconomistScraperService),
});
