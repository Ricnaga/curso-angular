import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingExecComponent } from './data-binding-exec.component';

describe('DataBindingExecComponent', () => {
  let component: DataBindingExecComponent;
  let fixture: ComponentFixture<DataBindingExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBindingExecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBindingExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
