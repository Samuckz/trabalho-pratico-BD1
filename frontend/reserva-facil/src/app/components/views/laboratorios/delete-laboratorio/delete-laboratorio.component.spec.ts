import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteLaboratorioComponent } from './delete-laboratorio.component';

describe('DeleteLaboratorioComponent', () => {
  let component: DeleteLaboratorioComponent;
  let fixture: ComponentFixture<DeleteLaboratorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteLaboratorioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteLaboratorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
