import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../components/views/reservas/Reserva';
import { platform } from 'os';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private readonly API = 'http://localhost:8080/reservas';

  constructor(private httpClient: HttpClient) {}

  read(): Observable<Reserva[]> {
    return this.httpClient.get<Reserva[]>(this.API);
  }

  delete(reserva: Reserva): Observable<String> {

    const payload = {
      idLaboratorio: reserva.idLaboratorio,
      codigoDisciplina: reserva.codigoDisciplina,
      agendamento: reserva.horario
    };

    return this.httpClient.delete<String>(this.API, {body: payload});
  }
}
