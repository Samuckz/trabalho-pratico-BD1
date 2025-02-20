import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudReservasComponent } from './crud-reservas.component';

describe('CrudReservasComponent', () => {
  let component: CrudReservasComponent;
  let fixture: ComponentFixture<CrudReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
