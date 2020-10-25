// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
  url: '/auth/',
  realm: 'my-company',
  clientId: 'website-client',
};

export const environment = {
  production: false,
  keycloak: keycloakConfig,
  companyServiceBaseUrl: '/companies/api',
  convertServiceBaseUrl: '/converts/api',
};
