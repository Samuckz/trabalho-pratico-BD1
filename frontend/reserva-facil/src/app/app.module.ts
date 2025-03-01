import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NavComponent } from './components/templates/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { AppMaterialModule } from './shared/app-material/app-material.module';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CrudReservasComponent } from './components/views/reservas/crud-reservas/crud-reservas.component';
import { ReservasReadComponent } from './components/views/reservas/reservas-read/reservas-read.component';
import { DeleteReservasComponent } from './components/views/reservas/delete-reservas/delete-reservas.component';
import { CreateReservasComponent } from './components/views/reservas/create-reservas/create-reservas.component';
import { CrudAlunosComponent } from './components/views/alunos/crud-alunos/crud-alunos.component';
import { AlunosReadComponent } from './components/views/alunos/alunos-read/alunos-read.component';
import { DeleteAlunosComponent } from './components/views/alunos/delete-alunos/delete-alunos.component';
import { UpdateAlunosComponent } from './components/views/alunos/update-alunos/update-alunos.component';
import { CreateAlunoComponent } from './components/views/alunos/create-aluno/create-aluno.component';
import { CrudProfessorComponent } from './components/views/professor/crud-professor/crud-professor.component';
import { ProfessorReadComponent } from './components/views/professor/professor-read/professor-read.component';
import { DeleteProfessoresComponent } from './components/views/professor/delete-professores/delete-professores.component';
import { UpdateProfessorComponent } from './components/views/professor/update-professor/update-professor.component';
import { CreateProfessorComponent } from './components/views/professor/create-professor/create-professor.component';
import { CrudLaboratoriosComponent } from './components/views/laboratorios/crud-laboratorios/crud-laboratorios.component';
import { LaboratoriosReadComponent } from './components/views/laboratorios/laboratorios-read/laboratorios-read.component';
import { DeleteLaboratorioComponent } from './components/views/laboratorios/delete-laboratorio/delete-laboratorio.component';
import { UpdateLaboratorioComponent } from './components/views/laboratorios/update-laboratorio/update-laboratorio.component';
import { CreateLaboratorioComponent } from './components/views/laboratorios/create-laboratorio/create-laboratorio.component';
import { CrudDisciplinasComponent } from './components/views/disciplinas/crud-disciplinas/crud-disciplinas.component';
import { DisciplinasReadComponent } from './components/views/disciplinas/disciplinas-read/disciplinas-read.component';
import { DeleteDisciplinaComponent } from './components/views/disciplinas/delete-disciplina/delete-disciplina.component';
import { UpdateDisciplinaComponent } from './components/views/disciplinas/update-disciplina/update-disciplina.component';
import { CreateDisciplinaComponent } from './components/views/disciplinas/create-disciplina/create-disciplina.component';
import { CrudMatriculasComponent } from './components/views/matriculas/crud-matriculas/crud-matriculas.component';
import { ReadMatriculasComponent } from './components/views/matriculas/read-matriculas/read-matriculas.component';
import { LaboratoriosSemReservasComponent } from './components/views/laboratorios/laboratorios-sem-reservas/laboratorios-sem-reservas.component';
import { DisciplinasCheiasComponent } from './components/views/disciplinas/disciplinas-cheias/disciplinas-cheias.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CrudReservasComponent,
    ReservasReadComponent,
    DeleteReservasComponent,
    CreateReservasComponent,
    CrudAlunosComponent,
    AlunosReadComponent,
    DeleteAlunosComponent,
    UpdateAlunosComponent,
    CreateAlunoComponent,
    CrudProfessorComponent,
    ProfessorReadComponent,
    DeleteProfessoresComponent,
    UpdateProfessorComponent,
    CreateProfessorComponent,
    CrudLaboratoriosComponent,
    LaboratoriosReadComponent,
    DeleteLaboratorioComponent,
    UpdateLaboratorioComponent,
    CreateLaboratorioComponent,
    CrudDisciplinasComponent,
    DisciplinasReadComponent,
    DeleteDisciplinaComponent,
    UpdateDisciplinaComponent,
    CreateDisciplinaComponent,
    CrudMatriculasComponent,
    ReadMatriculasComponent,
    LaboratoriosSemReservasComponent,
    DisciplinasCheiasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
