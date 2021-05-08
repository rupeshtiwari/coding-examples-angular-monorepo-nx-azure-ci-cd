import { Component } from '@angular/core';
import { LoggingService } from '@myorg/branding-logger';
@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Puppies CLIENT Portal';
  constructor(private loggingService: LoggingService) {
    this.loggingService.log(`welcome to puppies page`);
  }
}
