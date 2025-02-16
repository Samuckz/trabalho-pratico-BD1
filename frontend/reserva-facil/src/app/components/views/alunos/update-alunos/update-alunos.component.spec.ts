import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlunosComponent } from './update-alunos.component';

describe('UpdateAlunosComponent', () => {
  let component: UpdateAlunosComponent;
  let fixture: ComponentFixture<UpdateAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
