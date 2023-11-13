import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DatatablesComponent } from './datatables/datatables.component';
import { FormsComponent } from './forms/forms.component';
import { PrincipalComponent } from './principal/principal.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    AlertsComponent,
    ButtonsComponent,
    DatatablesComponent,
    FormsComponent,
    PrincipalComponent,
  ],
  exports: [
    AlertsComponent,
    ButtonsComponent,
    DatatablesComponent,
    FormsComponent,
    PrincipalComponent,
  ],
  imports: [CommonModule, SplitterModule],
})
export class PagesModuleModule {}
