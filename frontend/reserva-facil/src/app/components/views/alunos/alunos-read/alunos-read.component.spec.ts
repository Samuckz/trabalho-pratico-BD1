import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosReadComponent } from './alunos-read.component';

describe('AlunosReadComponent', () => {
  let component: AlunosReadComponent;
  let fixture: ComponentFixture<AlunosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
