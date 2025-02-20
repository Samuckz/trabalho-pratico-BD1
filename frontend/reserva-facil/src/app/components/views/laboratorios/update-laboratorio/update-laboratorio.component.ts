import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { SnackBarService } from '../../../../services/snack-bar.service';

@Component({
  selector: 'app-update-laboratorio',
  templateUrl: './update-laboratorio.component.html',
  styleUrls: ['./update-laboratorio.component.css']
})
export class UpdateLaboratorioComponent implements OnInit {

  laboratorio: LaboratorioModel = {} as LaboratorioModel

  constructor(
    private laboratorioService: LaboratorioService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const id: string | null = this.route.snapshot.paramMap.get('id');

    if (id !== null) {
      this.laboratorioService.readById(id).subscribe({
        next: (laboratorio) => {
          this.laboratorio = laboratorio;
          console.log('lab', laboratorio);

        },
        error: () => {
          const errorMessage = "Houve um erro ao buscar o laboratorio de id: " + id;
          this.snackService.createSnackBar(errorMessage);
          this.navigateLaboratoriosPage();
        }
      })
    }
  }

  update(): void {
    this.laboratorioService.update(this.laboratorio).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Laboratorio atualizado com sucesso!")
        this.navigateLaboratoriosPage();
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

  navigateLaboratoriosPage(): void {
    this.router.navigate(['/laboratorios'])
  }

}
