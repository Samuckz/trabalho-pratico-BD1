import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDisciplinasComponent } from './crud-disciplinas.component';

describe('CrudDisciplinasComponent', () => {
  let component: CrudDisciplinasComponent;
  let fixture: ComponentFixture<CrudDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudDisciplinasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
