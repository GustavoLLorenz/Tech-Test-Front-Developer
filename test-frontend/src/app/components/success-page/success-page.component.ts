import { Component } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent {
  candidate: any
  constructor() {
    const user = localStorage.getItem('candidate')
    if (user){
      this.candidate = JSON.parse(user)
      console.log(this.candidate)
  
    }
     
  }
}
