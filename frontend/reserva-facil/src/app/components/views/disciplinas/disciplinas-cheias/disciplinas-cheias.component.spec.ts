import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinasCheiasComponent } from './disciplinas-cheias.component';

describe('DisciplinasCheiasComponent', () => {
  let component: DisciplinasCheiasComponent;
  let fixture: ComponentFixture<DisciplinasCheiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisciplinasCheiasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinasCheiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
