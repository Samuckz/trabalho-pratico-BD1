import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasReadComponent } from './reservas-read.component';

describe('ReservasReadComponent', () => {
  let component: ReservasReadComponent;
  let fixture: ComponentFixture<ReservasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
