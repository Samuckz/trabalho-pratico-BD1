import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudLaboratoriosComponent } from './crud-laboratorios.component';

describe('CrudLaboratoriosComponent', () => {
  let component: CrudLaboratoriosComponent;
  let fixture: ComponentFixture<CrudLaboratoriosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudLaboratoriosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudLaboratoriosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
