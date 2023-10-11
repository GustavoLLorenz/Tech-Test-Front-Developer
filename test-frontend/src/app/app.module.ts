import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobApplicationComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
