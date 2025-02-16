import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAlunosComponent } from './crud-alunos.component';

describe('CrudAlunosComponent', () => {
  let component: CrudAlunosComponent;
  let fixture: ComponentFixture<CrudAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
