import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';

@Component({
  selector: 'app-create-laboratorio',
  templateUrl: './create-laboratorio.component.html',
  styleUrls: ['./create-laboratorio.component.css']
})
export class CreateLaboratorioComponent implements OnInit {

  laboratorio: LaboratorioModel = {
    nome: '',
    capacidadeMaxima: null,
    predio: null,
    sala: null
  }

  constructor(
    private laboratorioService: LaboratorioService,
    private router: Router,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void { }

  salvar(): void {
    this.laboratorioService.create(this.laboratorio).subscribe({
      next: (() => {
        this.snackService.createSnackBar("Laboratorio cadastrado com sucesso!")
        this.navigateLaboratoriosPage()
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
    })

  }

  navigateLaboratoriosPage(): void {
    this.router.navigate(['/laboratorios'])
  }

  get ativarBotaoSalvar() {
    return
  }

}
