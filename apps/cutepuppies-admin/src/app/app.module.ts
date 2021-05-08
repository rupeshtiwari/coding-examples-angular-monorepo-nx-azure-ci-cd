import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrandingLoggerModule } from '@myorg/branding-logger';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/puppies-editor', pathMatch: 'full' },
        {
          path: 'puppies-editor',
          loadChildren: () =>
            import('@myorg/sales-puppy-editor').then(
              (module) => module.SalesPuppyEditorModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    BrandingLoggerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
