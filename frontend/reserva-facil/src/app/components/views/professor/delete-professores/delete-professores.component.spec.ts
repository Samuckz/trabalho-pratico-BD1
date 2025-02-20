import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProfessoresComponent } from './delete-professores.component';

describe('DeleteProfessoresComponent', () => {
  let component: DeleteProfessoresComponent;
  let fixture: ComponentFixture<DeleteProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
