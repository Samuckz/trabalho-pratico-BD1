import { AlunoModel } from "./aluno-model";
import { CursosEnum } from "./cursos-enum";
import { ProfessorModel } from "./professor-model";

export interface DisciplinaModel {
    codigo: number,
    nome: string,
    curso: CursosEnum,
    professorId: ProfessorModel, 
    alunosMatriculados: AlunoModel[] 
}