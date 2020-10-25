import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/panel/dashboard',
  },
  {
    title: 'My files',
    icon: 'shuffle-2-outline',
    link: '/panel/files',
    home: true,
  },
  {
    title: 'Companies',
    icon: 'home-outline',
    link: '/panel/companies',
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    link: '/panel/profile',
  },
  {
    title: 'Resources',
    group: true,
  },
  {
    title: 'Help',
    icon: 'layout-outline',
    link: '/panel/help',
  },
];
