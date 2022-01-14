import validate from '@application/middlewares/httpRequest/validate';
import validationSchemes from '@infrastructure/validation/controllers/economist';
import getAllArticles from './getAllArticles';
import getArticleById from './getArticleById';

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
    handler: getArticleById(EconomistScraperUseCases),
    method: 'get',
    path: '/economist/articles/:id',
    middlewares: [
      Authenticate,
      validate(validationSchemes.articleById.params, 'params'),
    ],
    environments: ['prod', 'dev', 'staging'],
  },
];