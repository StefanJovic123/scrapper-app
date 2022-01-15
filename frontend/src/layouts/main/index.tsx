import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import MainNavbar from './MainNavbar';

export default function MainLayout() {
  return (
    <Box sx={{ px: 4, pb: 4, pt: 10, display: 'flex', flexDirection: 'column' }}>
      <MainNavbar />
      <Outlet />
    </Box>
  );
}
