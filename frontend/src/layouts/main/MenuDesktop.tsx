import { ReactNode } from 'react';
import { NavLink as RouterLink } from 'react-router-dom';

// material
import { styled } from '@mui/material/styles';
import { Link, Stack, LinkProps } from '@mui/material';

import { MenuProps, MenuItemProps } from './MainNavbar';

interface RouterLinkProps extends LinkProps {
  component?: ReactNode;
  to?: string;
  end?: boolean;
}

const LinkStyle = styled(Link)<RouterLinkProps>(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    opacity: 0.48,
    textDecoration: 'none'
  }
}));

type MenuDesktopItemProps = {
  item: MenuItemProps;
  isHome: boolean;
};

function MenuDesktopItem({ item, isHome }: MenuDesktopItemProps) {
  const { title, path } = item;

  return (
    <LinkStyle
      to={path}
      component={RouterLink}
      end={path === '/'}
      sx={{
        ...(isHome && { color: 'common.white' }),
        '&.active': {
          color: 'primary.main'
        }
      }}
    >
      {title}
    </LinkStyle>
  );
}

export default function MenuDesktop({ isHome, navConfig }: MenuProps) {
  return (
    <Stack direction="row">
      {navConfig.map((link) => (
        <MenuDesktopItem key={link.title} item={link} isHome={isHome} />
      ))}
    </Stack>
  );
}
