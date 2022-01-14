import { useMutation } from 'react-query';
import { LoginRequest, RegisterRequest, User } from '../@types';
import { login, register } from '../queries/authQueries';
import { error, success } from '../services/notification';

export const useLogin = () => {
  return useMutation('login', login, {
    onMutate: async (data: LoginRequest) => data,
    onSuccess: (response: User) => {
      localStorage.setItem('token', response.jwt);
      success('Welcome!');
    },
    onError: () => {
      error('Something went wrong');
    }
  });
};

export const useRegister = () => {
  return useMutation('register', register, {
    onMutate: async (data: RegisterRequest) => data,
    onSuccess: () => {
      success('Welcome!');
    },
    onError: () => {
      error('Something went wrong');
    }
  });
};
