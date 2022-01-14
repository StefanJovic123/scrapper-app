import axios, { AxiosResponse } from 'axios';
import { LoginRequest, RegisterRequest, User, ApiResponse } from '../@types';
import { BASE_API_URL } from '../config';

export const login = (variables: LoginRequest): Promise<User> => {
  return axios
    .post(`${BASE_API_URL}/login`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data);
};

export const register = (variables: RegisterRequest): Promise<User> => {
  return axios
    .post(`${BASE_API_URL}/register`, variables)
    .then((res: AxiosResponse<ApiResponse<User>>) => res.data.data);
};
