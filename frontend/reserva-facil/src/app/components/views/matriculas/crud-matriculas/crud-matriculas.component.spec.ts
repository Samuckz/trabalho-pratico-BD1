import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMatriculasComponent } from './crud-matriculas.component';

describe('CrudMatriculasComponent', () => {
  let component: CrudMatriculasComponent;
  let fixture: ComponentFixture<CrudMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudMatriculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
