import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoModel } from 'src/app/interfaces/aluno-model';
import { AlunoService } from 'src/app/services/aluno-service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';

@Component({
  selector: 'app-update-alunos',
  templateUrl: './update-alunos.component.html',
  styleUrls: ['./update-alunos.component.css']
})
export class UpdateAlunosComponent implements OnInit {

  aluno!: AlunoModel

  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private alunoService: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const matricula: string | null = this.route.snapshot.paramMap.get('matricula');

    if (matricula !== null) {
      this.alunoService.readById(matricula).subscribe({
        next: (aluno) => {
          this.aluno = aluno;
          console.log('aluno', aluno);

        },
        error: () => {
          const errorMessage = "Houve um erro ao buscar o aluno de matricula: " + matricula;
          this.snackService.createSnackBar(errorMessage);
          this.navigateAlunosPage();
        }
      })
    }
  }

  update(): void {
    this.alunoService.update(this.aluno).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Aluno atualizado com sucesso!")
        this.navigateAlunosPage();
      }),
      error: ((error) => {
        console.log(error);

        let errorMessage = "Ocorreu um erro inesperado";

        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (typeof error.error === 'string') {
          errorMessage = error.error;
        }

        this.snackService.createSnackBar(errorMessage);
      })
    })

  }

  navigateAlunosPage(): void {
    this.router.navigate(['/alunos'])
  }
}
