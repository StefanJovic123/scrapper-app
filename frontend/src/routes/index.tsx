import { Navigate, useRoutes } from 'react-router-dom';

// layouts
import MainLayout from '../layouts/main';

// guards
import GuestGuard from '../guards/GuestGuard';
import AuthGuard from '../guards/AuthGuard';

// Authentication Pages
import Login from '../pages/authentication/Login';
import Register from '../pages/authentication/Register';
import Articles from '../pages/Articles';
import ArticleDetails from '../pages/ArticleDetails/ArticleDetails';

export default function Router() {
  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: (
            <AuthGuard>
              <Articles />
            </AuthGuard>
          )
        },
        {
          path: 'articles/:id',
          element: (
            <AuthGuard>
              <ArticleDetails />
            </AuthGuard>
          )
        }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
