import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMobileComponent } from './info-mobile.component';

describe('InfoMobileComponent', () => {
  let component: InfoMobileComponent;
  let fixture: ComponentFixture<InfoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
