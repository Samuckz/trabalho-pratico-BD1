import { AlunoModel } from "./aluno-model";
import { CursosEnum } from "./cursos-enum";
import { ProfessorModel } from "./professor-model";

export interface DisciplinaModel {
    codigo: number,
    nome: string,
    curso: CursosEnum | null,
    professorId?: ProfessorModel | null,
    alunosMatriculados: AlunoModel[]
}

export interface DisciplinaRequestDTO {
    nome: string,
    curso: CursosEnum,
    professorId?: number
}

export interface DisciplinaResponseDTO {
    codigo: number,
    nome: string,
    curso: CursosEnum | null,
    professorId?: ProfessorModel | null,
    qntdAlunos: number
}