import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaboratorioComponent } from './create-laboratorio.component';

describe('CreateLaboratorioComponent', () => {
  let component: CreateLaboratorioComponent;
  let fixture: ComponentFixture<CreateLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
