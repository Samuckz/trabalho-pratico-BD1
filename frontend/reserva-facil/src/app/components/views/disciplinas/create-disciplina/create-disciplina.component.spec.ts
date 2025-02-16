import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDisciplinaComponent } from './create-disciplina.component';

describe('CreateDisciplinaComponent', () => {
  let component: CreateDisciplinaComponent;
  let fixture: ComponentFixture<CreateDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
