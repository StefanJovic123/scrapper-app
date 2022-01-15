import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';

const ICON_SIZE = {
  width: 22,
  height: 22
};

const menuConfig = [
  {
    title: 'Home',
    icon: <Icon icon={homeFill} {...ICON_SIZE} />,
    path: '/'
  }
];

export default menuConfig;
