import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { JobApplicationComponent } from './components/job-application/job-application.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'job', component: JobApplicationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
