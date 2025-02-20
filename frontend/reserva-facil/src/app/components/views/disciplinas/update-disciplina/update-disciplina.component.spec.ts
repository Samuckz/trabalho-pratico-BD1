import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDisciplinaComponent } from './update-disciplina.component';

describe('UpdateDisciplinaComponent', () => {
  let component: UpdateDisciplinaComponent;
  let fixture: ComponentFixture<UpdateDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
