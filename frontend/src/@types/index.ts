export type LoginRequest = {
  password: string;
  email: string;
};

export type ApiResponse<T> = {
  status: string;
  message: string;
  data: T;
};

export type RegisterRequest = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export type User = {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  jwt: string;
};

export type Article = {
  id: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  url?: string;
};

export type ArticleInfo = {
  id: string;
  paragraphs?: string[];
  title?: string;
  subtitle?: string;
  imageUrl?: string;
};
