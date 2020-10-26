import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelDashboardComponent } from './pages/panel-dashboard/panel-dashboard.component';
import { PanelConvertComponent } from './pages/panel-convert/panel-convert.component';
import { PanelCompanyComponent } from './pages/panel-company/panel-company.component';
import { SectionPanelRoutingModule } from './section-panel-routing.module';
import { PanelPagesComponent } from './pages/panel-pages.component';
import { PanelFooterComponent } from './theme/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './theme/panel-header/panel-header.component';
import { PanelLayoutComponent } from './theme/panel-layout/panel-layout.component';
import { NbActionsModule, NbIconModule, NbLayoutModule, NbMenuModule, NbSidebarModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2CompleterModule } from '@akveo/ng2-completer';


@NgModule({
  declarations: [
    PanelDashboardComponent,
    PanelConvertComponent,
    PanelCompanyComponent,
    PanelPagesComponent,
    PanelFooterComponent,
    PanelHeaderComponent,
    PanelLayoutComponent,
  ],
  imports: [
    CommonModule,
    SectionPanelRoutingModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    NbActionsModule,
    NbIconModule,
    Ng2CompleterModule.forRoot(),
    Ng2SmartTableModule,
  ],
})
export class SectionPanelModule {
}
