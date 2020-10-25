import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
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
