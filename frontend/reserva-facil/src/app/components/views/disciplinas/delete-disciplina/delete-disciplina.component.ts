import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';
import { DisciplinaModel } from 'src/app/interfaces/disciplina-model';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { DisciplinaService } from 'src/app/services/disciplina.service';

@Component({
  selector: 'app-delete-disciplina',
  templateUrl: './delete-disciplina.component.html',
  styleUrls: ['./delete-disciplina.component.css']
})
export class DeleteDisciplinaComponent implements OnInit {

  disciplina: DisciplinaModel = {} as DisciplinaModel;

  constructor(
    private service: DisciplinaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo') as string

    this.service.readById(codigo).subscribe({
      next: (disciplina) => {
        this.disciplina = disciplina;
        console.log('disciplina', disciplina);

      },
      error: () => {
        const errorMessage = "Houve um erro ao buscar a disciplina de codigo: " + codigo;
        this.snackService.createSnackBar(errorMessage);
        this.navigateDisciplinasPage();
      }
    })
  }

  delete(): void {
    const codigo = this.route.snapshot.paramMap.get('codigo') as string;
    this.service.delete(codigo).subscribe({
      next: (response) => {
        console.log(response);
        this.snackService.createSnackBar("Disciplina excluída com sucesso!");
        this.navigateDisciplinasPage();
      },
      error: (error) => {
        console.error("Erro ao excluir disciplina:", error);
        this.snackService.createSnackBar("Erro ao excluir disciplina. Tente novamente.");
        this.navigateDisciplinasPage();
      }
    });
  }


  navigateDisciplinasPage(): void {
    console.log("voltando para lista")
    this.router.navigate(['/disciplinas'])
  }

  obterNomeCurso(chave: string): string {
    return CursosEnum[chave as keyof typeof CursosEnum] || "Curso não encontrado";
  }

}
