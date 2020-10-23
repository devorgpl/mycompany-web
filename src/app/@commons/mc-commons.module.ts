import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRegulationsComponent } from './pages/commons-regulations/commons-regulations.component';
import { CommonsPolicyComponent } from './pages/commons-policy/commons-policy.component';
import { CommonsRodoComponent } from './pages/commons-rodo/commons-rodo.component';


@NgModule({
  declarations: [CommonsRegulationsComponent, CommonsPolicyComponent, CommonsRodoComponent],
  imports: [
    CommonModule,
  ],
})
export class McCommonsModule {
}
