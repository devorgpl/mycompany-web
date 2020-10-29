import { Injectable } from '@angular/core';
import { KeycloakEventType, KeycloakService } from 'keycloak-angular';
import { User } from '../../@commons/model/user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private keycloakService: KeycloakService) {
  }

  get userObservable$(): Observable<User> {
    return this.user$.asObservable().pipe(filter(user => !(user === null || user === undefined)));
  }

  init() {
    this.bindKeycloakEvents();
  }

  public bindKeycloakEvents(): void {
    this.keycloakService.keycloakEvents$.subscribe((event) => {
      if (event.type === KeycloakEventType.OnAuthSuccess) {
        this.updateUser();
      }
      if (event.type === KeycloakEventType.OnReady) {
        // this.updateUser();
      }

    });
  }

  private updateUser() {
    if (this.keycloakService.getKeycloakInstance().authenticated) {
      const token = this.keycloakService.getKeycloakInstance().tokenParsed;
      const user: User = {
        id: token.sub,
        firstName: token['family_name'],
        lastName: token['given_name'],
        email: token['email'],
        username: token['preferred_username'],
        auth_token: this.keycloakService.getKeycloakInstance().token,
      };
      this.user$.next(user);
    } else {
      this.user$.next(null);
    }

  }
}
