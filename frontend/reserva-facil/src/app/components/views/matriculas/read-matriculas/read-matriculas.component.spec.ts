import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadMatriculasComponent } from './read-matriculas.component';

describe('ReadMatriculasComponent', () => {
  let component: ReadMatriculasComponent;
  let fixture: ComponentFixture<ReadMatriculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadMatriculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadMatriculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
