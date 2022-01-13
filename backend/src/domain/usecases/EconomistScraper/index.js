import GetAllArticles from './GetAllArticles';
import GetArticleFromUrl from './GetArticleFromUrl';

export default (EconomistScraperService) => ({
  GetAllArticles: new GetAllArticles(EconomistScraperService),
  GetArticleFromUrl: new GetArticleFromUrl(EconomistScraperService)
});
