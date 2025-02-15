import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LaboratorioModel } from '../interfaces/laboratorio-model';

@Injectable({
  providedIn: 'root'
})
export class LaboratorioService {

  private readonly API = 'http://localhost:8080/laboratorios';

  constructor(private httpClient: HttpClient) { }

  read(): Observable<LaboratorioModel[]> {
    return this.httpClient.get<LaboratorioModel[]>(this.API);
  }
}
