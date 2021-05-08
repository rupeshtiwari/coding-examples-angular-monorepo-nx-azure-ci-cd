import { Component } from '@angular/core';
import { LoggingService } from '@myorg/branding-logger';
@Component({
  selector: 'myorg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Cute Puppy Admin Portal';
  constructor(private readonly loggingService: LoggingService) {
    this.loggingService.log('Hello Puppy Admin!!');
  }
}
