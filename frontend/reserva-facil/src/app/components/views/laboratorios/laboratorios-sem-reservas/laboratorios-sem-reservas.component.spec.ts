import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriosSemReservasComponent } from './laboratorios-sem-reservas.component';

describe('LaboratoriosSemReservasComponent', () => {
  let component: LaboratoriosSemReservasComponent;
  let fixture: ComponentFixture<LaboratoriosSemReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriosSemReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriosSemReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
