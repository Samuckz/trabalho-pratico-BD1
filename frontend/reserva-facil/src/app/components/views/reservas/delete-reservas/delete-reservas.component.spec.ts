import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReservasComponent } from './delete-reservas.component';

describe('DeleteReservasComponent', () => {
  let component: DeleteReservasComponent;
  let fixture: ComponentFixture<DeleteReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReservasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
