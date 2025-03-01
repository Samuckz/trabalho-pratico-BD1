import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DisciplinaModel, DisciplinaRequestDTO, DisciplinaResponseDTO } from '../interfaces/disciplina-model';
import { MatriculaModel } from '../interfaces/matricula-model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  private readonly API = 'http://localhost:8080/disciplinas';

  constructor(private httpClient: HttpClient) { }

  read(): Observable<DisciplinaModel[]> {
    return this.httpClient.get<DisciplinaModel[]>(this.API);
  }

  readForDisciplinaTable(): Observable<DisciplinaResponseDTO[]> {
    return this.httpClient.get<DisciplinaResponseDTO[]>(this.API);
  }

  create(disciplina: DisciplinaRequestDTO): Observable<DisciplinaModel> {
    return this.httpClient.post<DisciplinaModel>(this.API, disciplina);
  }


  readById(codigo: string) {
    const urlConsultada = `${this.API}/${codigo}`;
    return this.httpClient.get<DisciplinaModel>(urlConsultada).pipe(
      map(obj => obj)
    )
  }

  delete(codigo: string): Observable<String> {
    const urlConsultada = `${this.API}/deletarDisciplina/${codigo}`;
    return this.httpClient.get<String>(urlConsultada, { responseType: 'text' as 'json' });
  }

  update(disciplina: DisciplinaRequestDTO, codigo: number): Observable<DisciplinaModel> {
    const urlConsultada = `${this.API}/${codigo}`
    return this.httpClient.put<DisciplinaModel>(urlConsultada, disciplina)
  }

  listarMatriculas(): Observable<MatriculaModel[]>{
    const url = `${this.API}/matriculas`;
    return this.httpClient.get<MatriculaModel[]>(url);
  }

  listarDisciplinasCheias(): Observable<DisciplinaResponseDTO[]> {
    const url = `${this.API}/disciplinas-capacidade-maxima`;
    return this.httpClient.get<DisciplinaResponseDTO[]>(url);

  }
}
