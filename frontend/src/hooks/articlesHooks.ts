import { useQuery } from 'react-query';
import { STALE_TIME } from '../config';
import { getArticleById, getArticles } from '../queries/articlesQueries';

export const useArticles = () => {
  return useQuery('all-articles', () => getArticles(), {
    staleTime: STALE_TIME
  });
};

export const useArticleById = (id: number) => {
  return useQuery(['all-articles', id], () => getArticleById(id), {
    staleTime: STALE_TIME
  });
};
