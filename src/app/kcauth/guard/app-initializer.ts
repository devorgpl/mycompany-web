import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return (): Promise<boolean> => {
    // const token = localStorage.getItem('kc_token');
    // const refreshToken = localStorage.getItem('kc_refreshToken');
    const keycloakInit = keycloak.init({
      config: {
        url: environment.keycloak.url,
        realm: environment.keycloak.realm,
        clientId: environment.keycloak.clientId,
      },
      initOptions: {
        // token: token,
        // refreshToken: refreshToken,
        checkLoginIframe: true,
        checkLoginIframeInterval: 25,
      },
      loadUserProfileAtStartUp: true,
      enableBearerInterceptor: true,
    });
    keycloakInit.then(
      success => {
        localStorage.setItem('kc_token', keycloak.getKeycloakInstance().token);
        localStorage.setItem('kc_refreshToken', keycloak.getKeycloakInstance().refreshToken);
      }, reason => {
      });
    return keycloakInit;
  };
}
