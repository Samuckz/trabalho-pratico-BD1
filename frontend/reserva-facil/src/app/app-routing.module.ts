import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAlunoComponent } from './components/views/alunos/create-aluno/create-aluno.component';
import { CrudAlunosComponent } from './components/views/alunos/crud-alunos/crud-alunos.component';
import { DeleteAlunosComponent } from './components/views/alunos/delete-alunos/delete-alunos.component';
import { UpdateAlunosComponent } from './components/views/alunos/update-alunos/update-alunos.component';
import { CreateDisciplinaComponent } from './components/views/disciplinas/create-disciplina/create-disciplina.component';
import { CrudDisciplinasComponent } from './components/views/disciplinas/crud-disciplinas/crud-disciplinas.component';
import { DeleteDisciplinaComponent } from './components/views/disciplinas/delete-disciplina/delete-disciplina.component';
import { UpdateDisciplinaComponent } from './components/views/disciplinas/update-disciplina/update-disciplina.component';
import { HomeComponent } from './components/views/home/home.component';
import { CreateLaboratorioComponent } from './components/views/laboratorios/create-laboratorio/create-laboratorio.component';
import { CrudLaboratoriosComponent } from './components/views/laboratorios/crud-laboratorios/crud-laboratorios.component';
import { DeleteLaboratorioComponent } from './components/views/laboratorios/delete-laboratorio/delete-laboratorio.component';
import { UpdateLaboratorioComponent } from './components/views/laboratorios/update-laboratorio/update-laboratorio.component';
import { CreateProfessorComponent } from './components/views/professor/create-professor/create-professor.component';
import { CrudProfessorComponent } from './components/views/professor/crud-professor/crud-professor.component';
import { DeleteProfessoresComponent } from './components/views/professor/delete-professores/delete-professores.component';
import { UpdateProfessorComponent } from './components/views/professor/update-professor/update-professor.component';
import { CreateReservasComponent } from './components/views/reservas/create-reservas/create-reservas.component';
import { CrudReservasComponent } from './components/views/reservas/crud-reservas/crud-reservas.component';
import { DeleteReservasComponent } from './components/views/reservas/delete-reservas/delete-reservas.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
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
  {
    path: "laboratorios",
    component: CrudLaboratoriosComponent
  },
  {
    path: "laboratorios/delete/:id",
    component: DeleteLaboratorioComponent
  },
  {
    path: "laboratorios/update/:id",
    component: UpdateLaboratorioComponent
  },
  {
    path: "laboratorios/create",
    component: CreateLaboratorioComponent
  },
  {
    path: "disciplinas",
    component: CrudDisciplinasComponent
  },
  {
    path: "disciplinas/delete/:codigo",
    component: DeleteDisciplinaComponent
  },
  {
    path: "disciplinas/update/:codigo",
    component: UpdateDisciplinaComponent
  },
  {
    path: "disciplinas/create",
    component: CreateDisciplinaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
