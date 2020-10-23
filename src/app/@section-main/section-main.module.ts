import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainPagesComponent} from './pages/main-pages.component';
import {SectionMainRoutingModule} from './section-main-routing.module';
import { MainHomeComponent } from './pages/main-home/main-home.component';


@NgModule({
  declarations: [MainPagesComponent, MainHomeComponent],
  imports: [
    CommonModule,
    SectionMainRoutingModule,
  ],
})
export class SectionMainModule {
}
