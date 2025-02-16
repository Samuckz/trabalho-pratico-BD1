import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlunoModel } from 'src/app/interfaces/aluno-model';
import { AlunoService } from 'src/app/services/aluno-service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';

@Component({
  selector: 'app-create-aluno',
  templateUrl: './create-aluno.component.html',
  styleUrls: ['./create-aluno.component.css']
})
export class CreateAlunoComponent implements OnInit {

  aluno: AlunoModel = {
    nome: '',
    dataNascimento: '',
    curso: null,
  }

  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void { }

  salvar(): void {

    this.formatarData();

    this.alunoService.create(this.aluno).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Aluno cadastrado com sucesso!")
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
    this.aluno.dataNascimento =
      new Date(this.aluno.dataNascimento).toISOString();
  }

  navigateProductsPage(): void {
    this.router.navigate(['/alunos'])
  }

  get ativarBotaoSalvar() {
    return
  }

}
