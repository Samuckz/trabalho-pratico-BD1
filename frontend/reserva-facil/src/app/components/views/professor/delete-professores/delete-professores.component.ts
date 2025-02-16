import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { ProfessorService } from 'src/app/services/professor-service';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';

@Component({
  selector: 'app-delete-professores',
  templateUrl: './delete-professores.component.html',
  styleUrls: ['./delete-professores.component.css']
})
export class DeleteProfessoresComponent implements OnInit {

  professor: ProfessorModel = {} as ProfessorModel;

  constructor(
    private service: ProfessorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const matricula = this.route.snapshot.paramMap.get('id') as string

    this.service.readById(matricula).subscribe({
      next: (professor) => {
        this.professor = professor;
        console.log('professor', professor);

      },
      error: () => {
        const errorMessage = "Houve um erro ao buscar o professor de id: " + this.professor;
        this.snackService.createSnackBar(errorMessage);
        this.navigateProfessorPage();
      }
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.service.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.snackService.createSnackBar("Professor excluído com sucesso!");
        this.navigateProfessorPage();
      },
      error: (error) => {
        console.error("Erro ao excluir aluno:", error);
        this.snackService.createSnackBar("Erro ao excluir professor. Tente novamente.");
        this.navigateProfessorPage();
      }
    });
  }


  navigateProfessorPage(): void {
    console.log("voltando para lista")
    this.router.navigate(['/professores'])
  }

  obterEspecialidade(chave: string): string {
    return CursosEnum[chave as keyof typeof CursosEnum] || "Curso não encontrado";
  }

}
