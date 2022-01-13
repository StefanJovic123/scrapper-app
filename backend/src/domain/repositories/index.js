// Repositories
import UsersRepository from './UsersRepository';

// Model Schemas
import usersSchemes from '../models/users';

export default (db) => ({
  UsersRepository: new UsersRepository(db.PSQLDB.models.User, usersSchemes),
});
