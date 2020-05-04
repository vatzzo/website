import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpoMobileComponent } from './expo-mobile.component';

describe('ExpoMobileComponent', () => {
  let component: ExpoMobileComponent;
  let fixture: ComponentFixture<ExpoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
