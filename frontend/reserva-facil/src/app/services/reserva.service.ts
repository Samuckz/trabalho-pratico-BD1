import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ReservaDTO, ReservaEntity } from '../interfaces/Reserva';
import { platform } from 'os';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  private readonly API = 'http://localhost:8080/reservas';

  constructor(private httpClient: HttpClient) {}

  create(reserva: ReservaEntity): Observable<ReservaEntity>{
    return this.httpClient.post<ReservaEntity>(this.API, reserva);
  }

  read(): Observable<ReservaDTO[]> {
    return this.httpClient.get<ReservaDTO[]>(this.API);
  }

  readById(id: string){
    const urlConsultada = `${this.API}/buscarReserva/${id}`;
    return this.httpClient.get<ReservaEntity>(urlConsultada).pipe(
      map(obj => obj)
    )
  }

  delete(id: string): Observable<String> {

    const urlConsultada = `${this.API}/deletarReserva/${id}`;
    return this.httpClient.get<String>(urlConsultada, {responseType: 'text' as 'json'});
  }
}
