import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';
import { ReservaEntity } from '../../../../interfaces/Reserva';
import { SnackBarService } from '../../produto/services/snackBar-service/snack-bar.service';

@Component({
  selector: 'app-delete-reservas',
  templateUrl: './delete-reservas.component.html',
  styleUrls: ['./delete-reservas.component.css']
})
export class DeleteReservasComponent implements OnInit {

  reserva: ReservaEntity = {} as ReservaEntity;

  constructor(
    private service: ReservaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackService: SnackBarService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string

    this.service.readById(id).subscribe({
      next: (reserva) => {
        this.reserva = reserva;
        console.log('reserva', reserva);
  
      },
      error: () => {
        const errorMessage = "Houve um erro ao buscar a reserva de id: " + id;
        this.snackService.createSnackBar(errorMessage);
        this.navigateReservaPage();
      }
    })
  }

  delete(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.service.delete(id).subscribe({
      next: (response) => {
        console.log(response);
        this.snackService.createSnackBar("Reserva cancelada com sucesso!");
        this.navigateReservaPage();
      },
      error: (error) => {
        console.error("Erro ao cancelar a reserva:", error);
        this.snackService.createSnackBar("Erro ao cancelar a reserva. Tente novamente.");
        this.navigateReservaPage();
      }
    });
  }
  

  navigateReservaPage(): void {
    console.log("voltando para lista")
    this.router.navigate(['/reservas'])
  }

}
