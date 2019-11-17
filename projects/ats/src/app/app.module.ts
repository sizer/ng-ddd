import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './pages/dashboard-page.component';
import { ApplicantsPageComponent } from './pages/applicants-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPageComponent,
    ApplicantsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
