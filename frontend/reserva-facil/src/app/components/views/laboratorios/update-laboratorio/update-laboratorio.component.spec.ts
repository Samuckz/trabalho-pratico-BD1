import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaboratorioComponent } from './update-laboratorio.component';

describe('UpdateLaboratorioComponent', () => {
  let component: UpdateLaboratorioComponent;
  let fixture: ComponentFixture<UpdateLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
