import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import * as InlineEditor from '@myorg/branding-ckeditor';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[editor]',
})
export class BrandingEditorDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input() toolbarSpecifications: any;
  @Input() readOnly = false;

  ngOnInit(): void {
    this.CreateInlineEditor();
  }

  public CreateInlineEditor(): void {
    const configObj = JSON.parse(this.toolbarSpecifications);

    InlineEditor.create(this.elementRef.nativeElement, configObj)
      .then((editor) => {
        editor.isReadOnly = this.readOnly;
        console.log(Array.from(editor.ui.componentFactory.names()));
      })
      .catch((error) => {
        console.error(error.stack);
      });
  }
}
