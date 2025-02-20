import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { AlunoService } from 'src/app/services/aluno-service';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { ProfessorService } from 'src/app/services/professor-service';

@Component({
  selector: 'app-create-professor',
  templateUrl: './create-professor.component.html',
  styleUrls: ['./create-professor.component.css']
})
export class CreateProfessorComponent implements OnInit {

  professor: ProfessorModel = {
    name: '',
    dataNascimento: '',
    especialidade: null,
    disciplinasMinistradas: []
  }

  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void { }

  salvar(): void {

    this.formatarData();

    this.professorService.create(this.professor).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Professor cadastrado com sucesso!")
        this.navigateProductsPage()
      }),
      error: ((error: HttpErrorResponse) => {
        console.log(error);

        let errorMessage = "Ocorreu um erro inesperado";

        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (typeof error.error === 'string') {
          errorMessage = error.error;
        }

        this.snackService.createSnackBar(errorMessage);
      })
    }

    )

  }

  formatarData() {
    this.professor.dataNascimento =
      new Date(this.professor.dataNascimento).toISOString();
  }

  navigateProductsPage(): void {
    this.router.navigate(['/professores'])
  }

  get ativarBotaoSalvar() {
    return !this.professor.name && this.professor.dataNascimento && this.professor.especialidade
  }

}
