import { Component, OnInit } from '@angular/core';
import { LaboratorioModel } from 'src/app/interfaces/laboratorio-model';
import { LaboratorioService } from 'src/app/services/laboratorio.service';

@Component({
  selector: 'app-laboratorios-read',
  templateUrl: './laboratorios-read.component.html',
  styleUrls: ['./laboratorios-read.component.css']
})
export class LaboratoriosReadComponent implements OnInit {

  laboratorios: LaboratorioModel[] = []
  displayedColumns = ['id', 'nome', 'capacidadeMaxima', 'predio', 'sala', 'action']

  constructor(
    private service: LaboratorioService,
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((laboratorios) => {
      this.laboratorios = laboratorios
      console.log(laboratorios);

    });
  }

}
