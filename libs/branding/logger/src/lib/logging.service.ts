import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingService {
  constructor() {}

  log(message: string) {
    console.log(new Date() + ': ' + message);
  }
}
