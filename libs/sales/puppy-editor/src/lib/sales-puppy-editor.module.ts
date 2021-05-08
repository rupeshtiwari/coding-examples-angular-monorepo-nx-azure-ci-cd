import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AddPuppyComponent } from './add-puppy/add-puppy.component';
import { BrandingEditorModule } from '@myorg/branding-editor';

export const salesPuppyEditorRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    BrandingEditorModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddPuppyComponent },
    ]),
  ],
  declarations: [AddPuppyComponent],
  exports: [AddPuppyComponent],
})
export class SalesPuppyEditorModule {}
