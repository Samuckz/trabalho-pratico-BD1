import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisciplinaModel } from 'src/app/interfaces/disciplina-model';
import { DisciplinaRequestDTO } from 'src/app/interfaces/disciplina-model';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { ProfessorService } from 'src/app/services/professor-service';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';

@Component({
  selector: 'app-update-disciplina',
  templateUrl: './update-disciplina.component.html',
  styleUrls: ['./update-disciplina.component.css']
})
export class UpdateDisciplinaComponent implements OnInit {

  disciplina: DisciplinaModel = {} as DisciplinaModel;
  professores: ProfessorModel[] = [];
  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private disciplinaService: DisciplinaService,
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {

    this.obterProfessores();

    const codigo: string | null = this.route.snapshot.paramMap.get('codigo');

    if (codigo !== null) {
      this.disciplinaService.readById(codigo).subscribe({
        next: (disciplina) => {
          this.disciplina = disciplina;
          this.disciplina.professorId = this.professores.find(prof => prof.id === disciplina.professorId!.id);
          console.log('disciplina', disciplina);

        },
        error: () => {
          const errorMessage = "Houve um erro ao buscar a disciplina de codigo: " + codigo;
          this.snackService.createSnackBar(errorMessage);
          this.navigateDisciplinasPage();
        }
      })
    }

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

  update(): void {
    const request: DisciplinaRequestDTO = {
      nome: this.disciplina.nome,
      curso: this.disciplina.curso!,
      professorId: this.disciplina.professorId?.id!
    }
    this.disciplinaService.update(request, this.disciplina.codigo).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Disciplina atualizada com sucesso!")
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

}
