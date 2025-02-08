import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Reserva } from '../Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-reservas-read',
  templateUrl: './reservas-read.component.html',
  styleUrls: ['./reservas-read.component.css']
})
export class ReservasReadComponent implements OnInit {

  reservas: Reserva[] = []
    displayedColumns = ['horario', 'laboratorio', 'predio', 'sala', 'disciplina', 'action']

    constructor(
      private service: ReservaService,
      private dialog: MatDialog
    ) { }

    ngOnInit(): void {
      this.service.read().subscribe((reservas) => {
        this.reservas = reservas
        console.log(reservas);

      });
    }
}
