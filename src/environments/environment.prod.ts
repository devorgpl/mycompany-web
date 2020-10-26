import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: '/auth/',
  realm: 'my-company',
  clientId: 'website-client',
};


export const environment = {
  production: true,
  keycloak: keycloakConfig,
  companyServiceBaseUrl: '/companies/api',
  convertServiceBaseUrl: '/converts/api',
};
