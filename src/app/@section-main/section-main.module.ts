import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './pages/main-pages.component';
import { SectionMainRoutingModule } from './section-main-routing.module';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { MainLayoutComponent } from './theme/main-layout/main-layout.component';
import { NbActionsModule, NbLayoutModule } from '@nebular/theme';
import { MainHeaderComponent } from './theme/main-header/main-header.component';
import { ThemeModule } from '../@theme/theme.module';
import { MainFooterComponent } from './theme/main-footer/main-footer.component';


@NgModule({
  declarations: [MainPagesComponent, MainHomeComponent, MainLayoutComponent, MainHeaderComponent, MainFooterComponent],
  imports: [
    CommonModule,
    SectionMainRoutingModule,
    NbLayoutModule,
    NbActionsModule,
    ThemeModule,
    SectionMainRoutingModule,
  ],
})
export class SectionMainModule {
}
