import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { McCommonsModule } from './@commons/mc-commons.module';
import { ThemeModule } from './@theme/theme.module';
import { CoreModule } from './@core/core.module';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { COMPANY_URL } from './@commons/services/company.service';
import { environment } from '../environments/environment';
import { CONVERT_URL } from './@commons/services/convert.service';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { initializeKeycloak } from './kcauth/guard/app-initializer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    KeycloakAngularModule,
    AppRoutingModule,
    McCommonsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    CoreModule.forRoot(),
    ThemeModule.forRoot(),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    {
      provide: COMPANY_URL,
      useValue: environment.companyServiceBaseUrl,
    },
    {
      provide: CONVERT_URL,
      useValue: environment.convertServiceBaseUrl,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
