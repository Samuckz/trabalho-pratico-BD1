import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LaboratorioModel } from '../interfaces/laboratorio-model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  private readonly API = 'http://localhost:8080/laboratorios';

  constructor(private httpClient: HttpClient) { }

  read(): Observable<LaboratorioModel[]> {
    return this.httpClient.get<LaboratorioModel[]>(this.API);
  }

  create(laboratorio: LaboratorioModel): Observable<LaboratorioModel> {
    return this.httpClient.post<LaboratorioModel>(this.API, laboratorio);
  }


  readById(id: string) {
    const urlConsultada = `${this.API}/${id}`;
    return this.httpClient.get<LaboratorioModel>(urlConsultada).pipe(
      map(obj => obj)
    )
  }

  delete(id: string): Observable<String> {
    const urlConsultada = `${this.API}/deletarLaboratorio/${id}`;
    return this.httpClient.get<String>(urlConsultada, { responseType: 'text' as 'json' });
  }

  update(laboratorio: LaboratorioModel): Observable<LaboratorioModel> {
    const urlConsultada = `${this.API}/${laboratorio.id}`
    return this.httpClient.put<LaboratorioModel>(urlConsultada, laboratorio)
  }
}
