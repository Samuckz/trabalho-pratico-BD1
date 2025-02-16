import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';
import { DisciplinaModel, DisciplinaRequestDTO } from 'src/app/interfaces/disciplina-model';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorService } from 'src/app/services/professor-service';
import { SnackBarService } from '../../../../services/snack-bar.service';

@Component({
  selector: 'app-create-disciplina',
  templateUrl: './create-disciplina.component.html',
  styleUrls: ['./create-disciplina.component.css']
})
export class CreateDisciplinaComponent implements OnInit {

  disciplina: DisciplinaModel = {
    nome: '',
    curso: null,
    professorId: null

  } as DisciplinaModel;
  professores: ProfessorModel[] = [];
  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private disciplinaService: DisciplinaService,
    private professorService: ProfessorService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    this.obterProfessores();
  }

  obterProfessores(): void {
    this.professorService.read().subscribe({
      next: ((professores) => {
        this.professores = professores;
      }),
      error: (() => {
        this.snackService.createSnackBar("Houve um erro ao buscar os professores da aplicação. Tente novamente");
        this.navigateDisciplinasPage();
      })
    })
  }

  salvar(): void {
    const request: DisciplinaRequestDTO = {
      nome: this.disciplina.nome,
      curso: this.disciplina.curso!,
      professorId: this.disciplina.professorId?.id!
    }
    this.disciplinaService.create(request).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Disciplina cadastrada com sucesso!")
        this.navigateDisciplinasPage()
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

  navigateDisciplinasPage(): void {
    this.router.navigate(['/disciplinas'])
  }


  get ativarBotaoSalvar() {
    return !(this.disciplina.nome && this.disciplina.curso && this.disciplina.professorId)
  }

}
