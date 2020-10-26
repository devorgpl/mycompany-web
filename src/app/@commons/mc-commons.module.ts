import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRegulationsComponent } from './pages/commons-regulations/commons-regulations.component';
import { CommonsPolicyComponent } from './pages/commons-policy/commons-policy.component';
import { CommonsRodoComponent } from './pages/commons-rodo/commons-rodo.component';
import { CompanySwitchComponent } from './components/company-switch/company-switch.component';
import {NbSelectModule} from '@nebular/theme';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CommonsRegulationsComponent, CommonsPolicyComponent, CommonsRodoComponent, CompanySwitchComponent],
  imports: [
    CommonModule,
    NbSelectModule,
    RouterModule,
  ],
  exports: [
    CompanySwitchComponent,
  ],
})
export class McCommonsModule {
}
