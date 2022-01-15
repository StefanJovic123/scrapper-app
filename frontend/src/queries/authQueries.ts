import axios, { AxiosResponse } from 'axios';
import { LoginRequest, RegisterRequest, User, ApiResponse } from '../@types';
import { BASE_API_URL } from '../config';
import { error } from '../services/notification';

export const login = (variables: LoginRequest): Promise<User> => {
  return axios
    .post(`${BASE_API_URL}/login`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data);
};

export const register = (variables: RegisterRequest): Promise<User> => {
  return axios
    .post(`${BASE_API_URL}/signup`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data);
};
