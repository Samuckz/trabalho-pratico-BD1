import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasReadComponent } from './disciplinas-read.component';

describe('DisciplinasReadComponent', () => {
  let component: DisciplinasReadComponent;
  let fixture: ComponentFixture<DisciplinasReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
