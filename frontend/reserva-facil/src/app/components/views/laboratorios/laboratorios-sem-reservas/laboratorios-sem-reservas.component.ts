import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-laboratorios-sem-reservas',
  templateUrl: './laboratorios-sem-reservas.component.html',
  styleUrls: ['./laboratorios-sem-reservas.component.css']
})
export class LaboratoriosSemReservasComponent implements OnInit {

  laboratorios: LaboratorioModel[] = []
  displayedColumns = ['id', 'nome', 'capacidadeMaxima', 'predio', 'sala', 'action']
  isLoading: boolean = false;

  constructor(
    private service: LaboratorioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoading = true
    this.service.laboratoriosSemReservas().subscribe((laboratorios) => {
      this.laboratorios = laboratorios
      console.log(laboratorios);
      this.isLoading = false

    });
  }

  navigate(url: string) {
    this.router.navigate([url]);
  }
}
