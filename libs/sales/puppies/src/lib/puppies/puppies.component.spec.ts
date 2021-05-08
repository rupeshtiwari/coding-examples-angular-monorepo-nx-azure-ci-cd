import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppiesComponent } from './puppies.component';

describe('PuppiesComponent', () => {
  let component: PuppiesComponent;
  let fixture: ComponentFixture<PuppiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuppiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
