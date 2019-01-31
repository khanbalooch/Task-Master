import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthPopoverComponent } from './month-popover.component';

describe('MonthPopoverComponent', () => {
  let component: MonthPopoverComponent;
  let fixture: ComponentFixture<MonthPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
