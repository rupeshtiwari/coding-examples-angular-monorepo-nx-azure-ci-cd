import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'myorg-spe-add-puppy',
  templateUrl: './add-puppy.component.html',
  styleUrls: ['./add-puppy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddPuppyComponent implements OnInit {
  constructor() {
    console.log('puppie component');
  }

  ngOnInit(): void {}
}
