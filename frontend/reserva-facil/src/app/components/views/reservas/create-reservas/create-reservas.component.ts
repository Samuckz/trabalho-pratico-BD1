import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaModel } from 'src/app/interfaces/DisciplinaEntity';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { ReservaEntity } from 'src/app/interfaces/Reserva';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';

@Component({
  selector: 'app-create-reservas',
  templateUrl: './create-reservas.component.html',
  styleUrls: ['./create-reservas.component.css']
})
export class CreateReservasComponent implements OnInit {

  reserva: ReservaEntity = {
    agendamento: '',
    idLaboratorio: null,
    codigoDisciplina: null,
  }

  laboratorios: LaboratorioModel[] = [];
  disciplinas: DisciplinaModel[] = [];

  constructor(
    private laboratorioService: LaboratorioService,
    private disciplinaService: DisciplinaService,
    private reservaService: ReservaService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {

    this.obterLaboratorios();
    this.obterDisciplinas();

  }

  obterLaboratorios(): void {
    this.laboratorioService.read().subscribe({
      next: ((laboratoriosResponse) => {
        this.laboratorios = laboratoriosResponse;
        console.log(laboratoriosResponse)
      }),
      error: (() => {
        this.snackService.createSnackBar("Houve um erro ao buscar os laboratorios da aplicacao. Tente novamente");
        this.navigateProductsPage();
      })
    })
  }

  obterDisciplinas(): void {
    this.disciplinaService.read().subscribe({
      next: ((disciplinasResponse) => {
        this.disciplinas = disciplinasResponse;
        console.log(disciplinasResponse)
      }),
      error: (() => {
        this.snackService.createSnackBar("Houve um erro ao buscar as disciplinas da aplicacao. Tente novamente");
        this.navigateProductsPage();
      })
    })
  }

  salvar(): void {
    this.reservaService.create(this.reserva).subscribe(
      () => {
        this.snackService.createSnackBar("Produto cadastrado com sucesso!")
        this.navigateProductsPage()
      }
    )

  }

  navigateProductsPage(): void {
    this.router.navigate(['/reservas'])
  }


}
