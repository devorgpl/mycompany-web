import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainPagesComponent} from './pages/main-pages.component';

const routes: Routes = [{
  path: '',
  component: MainPagesComponent,
  children: [
    {
      path: 'home',
      component: MainPagesComponent,
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
