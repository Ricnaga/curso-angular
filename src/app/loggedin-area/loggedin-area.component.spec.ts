import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinAreaComponent } from './loggedin-area.component';

describe('LoggedinAreaComponent', () => {
  let component: LoggedinAreaComponent;
  let fixture: ComponentFixture<LoggedinAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
