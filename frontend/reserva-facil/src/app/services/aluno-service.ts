import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AlunoModel } from '../interfaces/aluno-model';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    private readonly API = 'http://localhost:8080/alunos';

    constructor(private httpClient: HttpClient) { }

    create(aluno: AlunoModel): Observable<AlunoModel> {
        return this.httpClient.post<AlunoModel>(this.API, aluno);
    }


    read(): Observable<AlunoModel[]> {
        return this.httpClient.get<AlunoModel[]>(this.API);
    }

    readById(matricula: string) {
        const urlConsultada = `${this.API}/${matricula}`;
        return this.httpClient.get<AlunoModel>(urlConsultada).pipe(
            map(obj => obj)
        )
    }

    delete(matricula: string): Observable<String> {
        const urlConsultada = `${this.API}/deletarAluno/${matricula}`;
        return this.httpClient.get<String>(urlConsultada, { responseType: 'text' as 'json' });
    }

    update(aluno: AlunoModel): Observable<AlunoModel> {
        const urlConsultada = `${this.API}/${aluno.matricula}`
        return this.httpClient.put<AlunoModel>(urlConsultada, aluno)
    }
}
