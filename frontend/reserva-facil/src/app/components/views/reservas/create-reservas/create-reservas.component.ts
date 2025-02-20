import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DisciplinaModel } from 'src/app/interfaces/disciplina-model';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { ReservaEntity } from 'src/app/interfaces/reserva-model';
import { DisciplinaService } from 'src/app/services/disciplina.service';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { SnackBarService } from '../../../../services/snack-bar.service';
import { HORAS_DISPONIVEIS } from 'src/app/shared/Constantes';
import { HttpErrorResponse } from '@angular/common/http';

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

  dadosHorario = {
    hora: '',
    data: ''
  }

  laboratorios: LaboratorioModel[] = [];
  disciplinas: DisciplinaModel[] = [];
  horasDisponiveis = HORAS_DISPONIVEIS;

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
      }),
      error: (() => {
        this.snackService.createSnackBar("Houve um erro ao buscar as disciplinas da aplicacao. Tente novamente");
        this.navigateProductsPage();
      })
    })
  }

  salvar(): void {
    this.formatarHorario()

    this.reservaService.create(this.reserva).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Reserva cadastrado com sucesso!")
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

  formatarHorario() {
    const dataSelecionada = new Date(this.dadosHorario.data);
    const [hora, minuto] = this.dadosHorario.hora.split(':');

    dataSelecionada.setHours(parseInt(hora)-3);
    dataSelecionada.setMinutes(parseInt(minuto));

    this.reserva.agendamento = dataSelecionada.toISOString();

  }

  navigateProductsPage(): void {
    this.router.navigate(['/reservas'])
  }

  get ativarBotaoSalvar() {
    return !(this.reserva.codigoDisciplina && this.reserva.idLaboratorio && this.dadosHorario.data && this.dadosHorario.hora)
  }

}
