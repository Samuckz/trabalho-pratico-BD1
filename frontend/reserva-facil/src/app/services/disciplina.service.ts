import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DisciplinaModel } from '../interfaces/disciplina-model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = 'http://localhost:8080/disciplinas';

  constructor(private httpClient: HttpClient) { }

  read(): Observable<DisciplinaModel[]> {
    return this.httpClient.get<DisciplinaModel[]>(this.API);
  }
}
