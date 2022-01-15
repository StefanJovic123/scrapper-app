import { useNavigate, useLocation } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Box, Button, AppBar, Toolbar, Container } from '@mui/material';

import navConfig from './MenuConfig';
import MenuDesktop from './MenuDesktop';

const APP_BAR_DESKTOP = 64;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  transition: theme.transitions.create(['height', 'background-color'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  height: APP_BAR_DESKTOP
}));

export type MenuItemProps = {
  title: string;
  path: string;
  icon?: JSX.Element;
  to?: string;
};

export type MenuProps = {
  isHome: boolean;
  navConfig: MenuItemProps[];
};

export default function MainNavbar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <AppBar sx={{ boxShadow: (theme) => theme.customShadows.z8, bgcolor: 'white' }}>
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="lg"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <MenuDesktop isHome={isHome} navConfig={navConfig} />

          <Box sx={{ flexGrow: 1 }} />

          <Button
            onClick={() => {
              window.localStorage.clear();
              navigate('/');
            }}
          >
            Logout
          </Button>
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
