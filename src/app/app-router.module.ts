import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { DatatablesComponent } from './pages/datatables/datatables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path: '',
    component: PrincipalComponent,
    pathMatch: 'full',
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
  {
    path: 'datatables',
    component: DatatablesComponent,
  },
  {
    path: 'forms',
    component: FormsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
