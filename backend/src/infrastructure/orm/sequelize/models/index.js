import connect from '../connection';
import { initializeOrm } from '../helpers';
import { DB_TYPES } from '../types';

// models
import User from './user';
import Article from './article';

export const modelClasses = {
  User,
  Article,
};

export default async (config) => {
  const connection = await connect(config);

  return initializeOrm(modelClasses, connection, DB_TYPES);
};
