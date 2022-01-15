import axios, { AxiosResponse } from 'axios';
import { LoginRequest, RegisterRequest, User, ApiResponse } from '../@types';
import { BASE_API_URL } from '../config';
import { error } from '../services/notification';

export const login = (variables: LoginRequest): Promise<User | null> => {
  return axios
    .post(`${BASE_API_URL}/login`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data)
    .catch(() => {
      error('Login failed');
      return null;
    });
};

export const register = (variables: RegisterRequest): Promise<User | null> => {
  return axios
    .post(`${BASE_API_URL}/register`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data)
    .catch(() => {
      error('Register failed');
      return null;
    });
};
