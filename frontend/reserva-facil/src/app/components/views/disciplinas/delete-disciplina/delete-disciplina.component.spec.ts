import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDisciplinaComponent } from './delete-disciplina.component';

describe('DeleteDisciplinaComponent', () => {
  let component: DeleteDisciplinaComponent;
  let fixture: ComponentFixture<DeleteDisciplinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDisciplinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDisciplinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
