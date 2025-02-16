import { CursosEnum } from "./cursos-enum";
import { DisciplinaModel } from "./disciplina-model";

export interface ProfessorModel {
    id: number,
    name: string,
    especialidade: CursosEnum,
    dataNascimento: string,
    disciplinasMinistradas: DisciplinaModel[]
}