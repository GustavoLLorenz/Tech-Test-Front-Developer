import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';
import { ChangeLangComponent } from './components/change-lang/change-lang.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job', component: JobApplicationComponent },
  { path: 'success', component: SuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
