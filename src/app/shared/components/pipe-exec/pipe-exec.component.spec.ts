import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeExecComponent } from './pipe-exec.component';

describe('PipeExecComponent', () => {
  let component: PipeExecComponent;
  let fixture: ComponentFixture<PipeExecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeExecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
