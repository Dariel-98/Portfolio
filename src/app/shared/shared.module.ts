import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SideBarComponent,
    HeaderComponent,
    SideBarComponent,
    HeaderComponent,
  ],
  exports: [SideBarComponent, HeaderComponent],
  imports: [CommonModule],
})
export class SharedModule {}