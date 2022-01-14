import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export default function MainLayout() {
  return (
    <Box sx={{ p: 4 }}>
      <Outlet />
    </Box>
  );
}
