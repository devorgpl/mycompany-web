import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainHomeComponent } from './pages/main-home/main-home.component';
import { MainPagesComponent } from './pages/main-pages.component';
import { CommonsPolicyComponent } from '../@commons/pages/commons-policy/commons-policy.component';
import { CommonsRegulationsComponent } from '../@commons/pages/commons-regulations/commons-regulations.component';

const routes: Routes = [{
  path: '',
  component: MainPagesComponent,
  children: [
    {
      path: 'home',
      component: MainHomeComponent,
    },
    {
      path: 'policy',
      component: CommonsPolicyComponent,
    },
    {
      path: 'regulations',
      component: CommonsRegulationsComponent,
    },
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: '**', redirectTo: 'home'},
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SectionMainRoutingModule {
}
