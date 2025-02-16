import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { SnackBarService } from '../../../../services/snack-bar.service';

@Component({
  selector: 'app-delete-laboratorio',
  templateUrl: './delete-laboratorio.component.html',
  styleUrls: ['./delete-laboratorio.component.css']
})
export class DeleteLaboratorioComponent implements OnInit {

  laboratorio: LaboratorioModel = {} as LaboratorioModel;

  constructor(
    private service: LaboratorioService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string

    this.service.readById(id).subscribe({
      next: (laboratorio) => {
        this.laboratorio = laboratorio;
        console.log('laboratorio', laboratorio);

      },
      error: () => {
        const errorMessage = "Houve um erro ao buscar o laboratorio de id: " + id;
        this.snackService.createSnackBar(errorMessage);
        this.navigateLaboratoriosPage();
      }
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.service.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.snackService.createSnackBar("Laboratorio excluído com sucesso!");
        this.navigateLaboratoriosPage();
      },
      error: (error) => {
        console.error("Erro ao excluir laboratorio:", error);
        this.snackService.createSnackBar("Erro ao excluir laboratorio. Tente novamente.");
        this.navigateLaboratoriosPage();
      }
    });
  }


  navigateLaboratoriosPage(): void {
    console.log("voltando para lista")
    this.router.navigate(['/laboratorios'])
  }

}
