import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { CrudProdutoComponent } from './components/views/produto/crud-produto/crud-produto.component';
import { CreateProductComponent } from './components/views/produto/create-product/create-product.component';
import { ProductUpdateComponent } from './components/views/produto/product-update/product-update.component';
import { DeleteProductComponent } from './components/views/produto/delete-product/delete-product.component';
import { CrudReservasComponent } from './components/views/reservas/crud-reservas/crud-reservas.component';
import { DeleteReservasComponent } from './components/views/reservas/delete-reservas/delete-reservas.component';
import { CreateReservasComponent } from './components/views/reservas/create-reservas/create-reservas.component';
import { CrudAlunosComponent } from './components/views/alunos/crud-alunos/crud-alunos.component';
import { DeleteAlunosComponent } from './components/views/alunos/delete-alunos/delete-alunos.component';
import { UpdateAlunosComponent } from './components/views/alunos/update-alunos/update-alunos.component';
import { CreateAlunoComponent } from './components/views/alunos/create-aluno/create-aluno.component';
import { CrudProfessorComponent } from './components/views/professor/crud-professor/crud-professor.component';
import { DeleteProfessoresComponent } from './components/views/professor/delete-professores/delete-professores.component';
import { UpdateProfessorComponent } from './components/views/professor/update-professor/update-professor.component';
import { CreateProfessorComponent } from './components/views/professor/create-professor/create-professor.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: CrudProdutoComponent
  },
  {
    path: "products/create",
    component: CreateProductComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: DeleteProductComponent
  },
  {
    path: "reservas",
    component: CrudReservasComponent
  },
  {
    path: "reservas/create",
    component: CreateReservasComponent
  },
  {
    path: "reservas/delete/:id",
    component: DeleteReservasComponent
  },
  {
    path: "alunos",
    component: CrudAlunosComponent
  },
  {
    path: "alunos/create",
    component: CreateAlunoComponent
  },
  {
    path: "alunos/delete/:matricula",
    component: DeleteAlunosComponent
  },
  {
    path: "alunos/update/:matricula",
    component: UpdateAlunosComponent
  },
  {
    path: "professores",
    component: CrudProfessorComponent
  },
  {
    path: "professores/delete/:id",
    component: DeleteProfessoresComponent
  },
  {
    path: "professores/update/:id",
    component: UpdateProfessorComponent
  },
  {
    path: "professores/create",
    component: CreateProfessorComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
