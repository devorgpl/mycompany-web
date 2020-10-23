import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonsRegulationsComponent } from './pages/commons-regulations/commons-regulations.component';
import { CommonsPolicyComponent } from './pages/commons-policy/commons-policy.component';


@NgModule({
  declarations: [CommonsRegulationsComponent, CommonsPolicyComponent],
  imports: [
    CommonModule,
  ],
})
export class McCommonsModule {
}
