import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'myorg-sp-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PuppiesComponent implements OnInit {
  constructor() {
    console.log('puppie component');
  }

  ngOnInit(): void {}
}
