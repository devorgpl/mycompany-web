import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PanelDashboardComponent } from './pages/panel-dashboard/panel-dashboard.component';
import { PanelCompanyComponent } from './pages/panel-company/panel-company.component';
import { PanelConvertComponent } from './pages/panel-convert/panel-convert.component';
import { PanelPagesComponent } from './pages/panel-pages.component';

const routes: Routes = [{
  path: '',
  component: PanelPagesComponent,
  children: [
    {
      path: 'dashboard',
      component: PanelDashboardComponent,
    },
    {
      path: 'company',
      component: PanelCompanyComponent,
    },
    {
      path: 'convert',
      component: PanelConvertComponent,
    },
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: 'dashboard'},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionPanelRoutingModule {
}
