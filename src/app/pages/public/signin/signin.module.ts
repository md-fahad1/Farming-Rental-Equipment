import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [SigninComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SigninComponent,
        data: {
          title: 'SignIn',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ]
})
export class SigninModule { }
