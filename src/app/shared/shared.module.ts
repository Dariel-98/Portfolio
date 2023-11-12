import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    SideBarComponent,
    HeaderComponent,
    MainPageComponent,
  ],
  exports: [SideBarComponent, HeaderComponent, MainPageComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
