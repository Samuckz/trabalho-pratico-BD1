import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunoModel } from 'src/app/interfaces/aluno-model';
import { AlunoService } from 'src/app/services/aluno-service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';

@Component({
  selector: 'app-delete-alunos',
  templateUrl: './delete-alunos.component.html',
  styleUrls: ['./delete-alunos.component.css']
})
export class DeleteAlunosComponent implements OnInit {

  aluno: AlunoModel = {} as AlunoModel;

  constructor(
    private service: AlunoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const matricula = this.route.snapshot.paramMap.get('matricula') as string

    this.service.readById(matricula).subscribe({
      next: (aluno) => {
        this.aluno = aluno;
        console.log('reserva', aluno);

      },
      error: () => {
        const errorMessage = "Houve um erro ao buscar o aluno de matricula: " + matricula;
        this.snackService.createSnackBar(errorMessage);
        this.navigateAlunosPage();
      }
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('matricula') as string;
    this.service.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.snackService.createSnackBar("Aluno excluído com sucesso!");
        this.navigateAlunosPage();
      },
      error: (error) => {
        console.error("Erro ao excluir aluno:", error);
        this.snackService.createSnackBar("Erro ao excluir aluno. Tente novamente.");
        this.navigateAlunosPage();
      }
    });
  }


  navigateAlunosPage(): void {
    console.log("voltando para lista")
    this.router.navigate(['/alunos'])
  }

  obterNomeCurso(chave: string): string {
    return CursosEnum[chave as keyof typeof CursosEnum] || "Curso não encontrado";
  }
}
