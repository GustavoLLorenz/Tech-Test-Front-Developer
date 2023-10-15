import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChangeLangComponent } from './components/change-lang/change-lang.component';
import { HttpLoaderFactory } from 'src/services/http-load.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobApplicationComponent,
    SuccessPageComponent,
    ChangeLangComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports:[ChangeLangComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
