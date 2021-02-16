import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseExplainedComponent } from './exercise-explained.component';

describe('ExerciseExplainedComponent', () => {
  let component: ExerciseExplainedComponent;
  let fixture: ComponentFixture<ExerciseExplainedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseExplainedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExerciseExplainedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
