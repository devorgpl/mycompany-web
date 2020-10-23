import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDashboardComponent } from './pages/panel-dashboard/panel-dashboard.component';
import { PanelConvertComponent } from './pages/panel-convert/panel-convert.component';
import { PanelCompanyComponent } from './pages/panel-company/panel-company.component';


@NgModule({
  declarations: [PanelDashboardComponent, PanelConvertComponent, PanelCompanyComponent],
  imports: [
    CommonModule,
  ],
})
export class SectionPanelModule {
}
