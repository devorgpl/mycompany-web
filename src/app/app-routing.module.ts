import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import { AppAuthGuard } from './kcauth/guard/kc-auth.guard';

export const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./@section-main/section-main.module')
      .then(m => m.SectionMainModule),
  },
  {
    path: 'panel',
    canActivate: [AppAuthGuard],
    data: {roles: ['website-access']},
    loadChildren: () => import('./@section-panel/section-panel.module')
      .then(m => m.SectionPanelModule),
  },
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main'},
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
