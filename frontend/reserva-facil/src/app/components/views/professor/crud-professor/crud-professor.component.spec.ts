import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProfessorComponent } from './crud-professor.component';

describe('CrudProfessorComponent', () => {
  let component: CrudProfessorComponent;
  let fixture: ComponentFixture<CrudProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
