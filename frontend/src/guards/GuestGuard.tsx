import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

// hooks
// import useAuth from '../hooks/useAuth';

// routes
import { PATH_APP } from '../routes/paths';

type GuestGuardProps = {
  children: ReactNode;
};

export default function GuestGuard({ children }: GuestGuardProps) {
  // const { isAuthenticated } = useAuth();
  const isAuthenticated = false;

  if (isAuthenticated) {
    return <Navigate to={PATH_APP.root} />;
  }

  return <>{children}</>;
}
