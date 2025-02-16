import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosEnum } from 'src/app/interfaces/cursos-enum';
import { ProfessorModel } from 'src/app/interfaces/professor-model';
import { ProfessorService } from 'src/app/services/professor-service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';

@Component({
  selector: 'app-update-professor',
  templateUrl: './update-professor.component.html',
  styleUrls: ['./update-professor.component.css']
})
export class UpdateProfessorComponent implements OnInit {

  professor: ProfessorModel  = {} as ProfessorModel;

  listaCursos = Object.entries(CursosEnum).map(([key, value]) => ({ key, value }));


  constructor(
    private professorService: ProfessorService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.professorService.readById(id).subscribe({
        next: (professor) => {
          this.professor = professor;
          console.log('professor', professor);

        },
        error: () => {
          const errorMessage = "Houve um erro ao buscar o professor de id: " + id;
          this.snackService.createSnackBar(errorMessage);
          this.navigateProfessoresPage();
        }
      })
    }
  }

  update(): void {
    console.log('professor atualizado', this.professor)
    this.professorService.update(this.professor).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Professor atualizado com sucesso!")
        this.navigateProfessoresPage();
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

  navigateProfessoresPage(): void {
    this.router.navigate(['/professores'])
  }

}
