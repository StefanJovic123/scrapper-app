import validate from '@application/middlewares/httpRequest/validate';
import validationSchemes from '@infrastructure/validation/controllers/economist';
import getAllArticles from './getAllArticles';
import getArticleFromUrl from './getArticleFromUrl';

export default (
  { EconomistScraperUseCases },
  { Authenticate },
) => [
  {
    handler: getAllArticles(EconomistScraperUseCases),
    method: 'get',
    path: '/economist/all-articles',
    middlewares: [
      Authenticate,
    ],
    environments: ['prod', 'dev', 'staging'],
  },

  {
    handler: getArticleFromUrl(EconomistScraperUseCases),
    method: 'post',
    path: '/economist/article-from-url',
    middlewares: [
      Authenticate,
      validate(validationSchemes.articleFromUrl.body, 'body'),
    ],
    environments: ['prod', 'dev', 'staging'],
  },
];