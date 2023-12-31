import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRouterModule } from './app-router.module';
import { PagesModuleModule } from './pages/pages-module.module';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    BrowserAnimationsModule,
    PagesModuleModule,
    SplitterModule,
  ],
  exports: [SplitterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
