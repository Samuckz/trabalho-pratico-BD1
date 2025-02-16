import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { ReservaDTO } from '../../../../interfaces/reserva-model';

@Component({
  selector: 'app-reservas-read',
  templateUrl: './reservas-read.component.html',
  styleUrls: ['./reservas-read.component.css']
})
export class ReservasReadComponent implements OnInit {

  reservas: ReservaDTO[] = []
  displayedColumns = ['id', 'horario', 'laboratorio', 'predio', 'sala', 'disciplina', 'action']

  constructor(
    private service: ReservaService,
  ) { }

  ngOnInit(): void {
    this.service.read().subscribe((reservas) => {
      this.reservas = reservas
      console.log(reservas);

    });
  }
}
