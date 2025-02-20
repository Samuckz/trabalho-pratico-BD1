import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAlunosComponent } from './delete-alunos.component';

describe('DeleteAlunosComponent', () => {
  let component: DeleteAlunosComponent;
  let fixture: ComponentFixture<DeleteAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAlunosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
