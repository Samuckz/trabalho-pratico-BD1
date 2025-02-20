import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { LaboratorioModel } from '../interfaces/laboratorio-model';
import { ProfessorModel } from '../interfaces/professor-model';
import { map } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProfessorService {

    private readonly API = 'http://localhost:8080/professores';

    constructor(private httpClient: HttpClient) { }

    create(professor: ProfessorModel): Observable<ProfessorModel> {
        return this.httpClient.post<ProfessorModel>(this.API, professor);
    }

    read(): Observable<ProfessorModel[]> {
        return this.httpClient.get<ProfessorModel[]>(this.API);
    }

    readById(id: string) {
        const urlConsultada = `${this.API}/${id}`;
        return this.httpClient.get<ProfessorModel>(urlConsultada).pipe(
            map(obj => obj)
        )
    }

    delete(id: string): Observable<String> {
        const urlConsultada = `${this.API}/deletarProfessor/${id}`;
        return this.httpClient.get<String>(urlConsultada, { responseType: 'text' as 'json' });
    }

    update(professor: ProfessorModel): Observable<ProfessorModel> {
        const urlConsultada = `${this.API}/${professor.id}`
        return this.httpClient.put<ProfessorModel>(urlConsultada, professor)
    }


}
