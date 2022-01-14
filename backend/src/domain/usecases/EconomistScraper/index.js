import GetAllArticles from './GetAllArticles';
import GetArticleById from './GetArticleById';

export default (EconomistScraperService) => ({
  GetAllArticles: new GetAllArticles(EconomistScraperService),
  GetArticleById: new GetArticleById(EconomistScraperService)
});
