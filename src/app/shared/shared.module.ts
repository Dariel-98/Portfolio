import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterialModule } from '../material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { RouterModule } from '@angular/router';
import { PagesModuleModule } from '../pages/pages-module.module';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [MainPageComponent, SideBarComponent],
  exports: [MainPageComponent, SideBarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    PagesModuleModule,
    SplitterModule,
  ],
})
export class SharedModule {}
