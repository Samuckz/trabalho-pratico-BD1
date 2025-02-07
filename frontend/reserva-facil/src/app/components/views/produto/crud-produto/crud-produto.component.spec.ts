import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudProdutoComponent } from './crud-produto.component';

describe('CrudProdutoComponent', () => {
  let component: CrudProdutoComponent;
  let fixture: ComponentFixture<CrudProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudProdutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
