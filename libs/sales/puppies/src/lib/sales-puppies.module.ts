import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PuppiesComponent } from './puppies/puppies.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: PuppiesComponent },
    ]),
  ],
  declarations: [PuppiesComponent],
  exports: [PuppiesComponent],
})
export class SalesPuppiesModule {}
