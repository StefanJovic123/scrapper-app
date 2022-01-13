import UsersService from './UsersService';
import AuthService from './AuthService';
import EconomistScraperService from './EconomistScraperService';

export default (repositories, { puppeteerPage }) => {
  return {
    UsersService: new UsersService(repositories.UsersRepository),
    AuthService: AuthService(repositories),
    EconomistScraperService: new EconomistScraperService(puppeteerPage),
  };
};
