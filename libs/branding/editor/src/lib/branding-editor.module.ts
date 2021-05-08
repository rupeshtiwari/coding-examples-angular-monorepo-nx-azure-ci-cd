import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandingEditorDirective } from './editor.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [BrandingEditorDirective],
  exports: [BrandingEditorDirective],
})
export class BrandingEditorModule {}
