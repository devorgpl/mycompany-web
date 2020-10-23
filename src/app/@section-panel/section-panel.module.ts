import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDashboardComponent } from './pages/panel-dashboard/panel-dashboard.component';
import { PanelConvertComponent } from './pages/panel-convert/panel-convert.component';
import { PanelCompanyComponent } from './pages/panel-company/panel-company.component';
import { SectionPanelRoutingModule } from './section-panel-routing.module';
import { PanelPagesComponent } from './pages/panel-pages.component';


@NgModule({
  declarations: [PanelDashboardComponent, PanelConvertComponent, PanelCompanyComponent, PanelPagesComponent],
  imports: [
    CommonModule,
    SectionPanelRoutingModule,
  ],
})
export class SectionPanelModule {
}
