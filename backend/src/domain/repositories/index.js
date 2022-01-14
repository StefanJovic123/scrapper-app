// Repositories
import UsersRepository from './UsersRepository';
import ArticleRepository from './ArticleRepository';

// Model Schemas
import usersSchemes from '../models/users';
import articlesSchemes from '../models/articles';

export default (db) => ({
  UsersRepository: new UsersRepository(db.PSQLDB.models.User, usersSchemes),
  ArticleRepository: new ArticleRepository(db.PSQLDB.models.Article, articlesSchemes),
});
