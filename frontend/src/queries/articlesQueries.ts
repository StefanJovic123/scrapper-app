import axios, { AxiosResponse } from 'axios';
import { Article, ArticleInfo, ApiResponse } from '../@types';
import { BASE_API_URL } from '../config';
import { error } from '../services/notification';

export const getArticles = () => {
  return axios
    .get(`${BASE_API_URL}/economist/all-articles`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res: AxiosResponse<ApiResponse<Article[]>>) => res.data.data)
    .catch(() => {
      error('Error getting articles');
      return [];
    });
};

export const getArticleById = (id: number): Promise<ArticleInfo | null> => {
  return axios
    .get(`${BASE_API_URL}/economist/articles/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then((res: AxiosResponse<ApiResponse<ArticleInfo>>) => res.data.data)
    .catch(() => {
      error('Error getting article');
      return null;
    });
};
