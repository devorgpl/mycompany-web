import { NbMenuItem } from '@nebular/theme';
import { environment } from '../../../environments/environment';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/panel/dashboard',
  },
  {
    title: 'My files',
    icon: 'shuffle-2-outline',
    link: '/panel/convert',
    home: true,
  },
  {
    title: 'Companies',
    icon: 'home-outline',
    link: '/panel/company',
  },
  {
    title: 'Account',
    icon: 'person-outline',
    url: environment.keycloak.url + 'realms/' + environment.keycloak.realm + '/account/',
  },
];
