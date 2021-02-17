import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecDiretivasComponent } from './exec-diretivas.component';

describe('ExecDiretivasComponent', () => {
  let component: ExecDiretivasComponent;
  let fixture: ComponentFixture<ExecDiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecDiretivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecDiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
