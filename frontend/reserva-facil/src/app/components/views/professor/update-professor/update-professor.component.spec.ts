import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProfessorComponent } from './update-professor.component';

describe('UpdateProfessorComponent', () => {
  let component: UpdateProfessorComponent;
  let fixture: ComponentFixture<UpdateProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
