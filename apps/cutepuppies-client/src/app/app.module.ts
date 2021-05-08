import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrandingLoggerModule } from '@myorg/branding-logger';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrandingLoggerModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: '/puppies', pathMatch: 'full' },
        {
          path: 'customers-users',
          loadChildren: () =>
            import('@myorg/customers-users').then(
              (module) => module.CustomersUsersModule
            ),
        },
        {
          path: 'puppies',
          loadChildren: () =>
            import('@myorg/sales-puppies').then(
              (module) => module.SalesPuppiesModule
            ),
        },
      ],
      { initialNavigation: 'enabled' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
