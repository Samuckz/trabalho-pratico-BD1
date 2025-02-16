import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoriosReadComponent } from './laboratorios-read.component';

describe('LaboratoriosReadComponent', () => {
  let component: LaboratoriosReadComponent;
  let fixture: ComponentFixture<LaboratoriosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoriosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoriosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
