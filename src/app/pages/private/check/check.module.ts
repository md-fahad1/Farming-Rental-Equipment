import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CheckPage } from './check.page';

@NgModule({
  declarations: [CheckPage], // declare the component here
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CheckPage,
        data: {
          title: 'Check',
          robots: 'noindex, nofollow',
        },
      },
    ]),
  ],
})
export class CheckModule {}
