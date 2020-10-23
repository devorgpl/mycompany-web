import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPagesComponent} from './pages/main-pages.component';
import {SectionMainRoutingModule} from './section-main-routing.module';


@NgModule({
  declarations: [MainPagesComponent],
  imports: [
    CommonModule,
    SectionMainRoutingModule,
  ],
})
export class SectionMainModule {
}
