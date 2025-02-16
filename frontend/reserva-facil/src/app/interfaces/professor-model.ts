import { CursosEnum } from "./cursos-enum";
import { DisciplinaModel } from "./disciplina-model";

export interface ProfessorModel {
    id?: number | null,
    name: string,
    especialidade: CursosEnum | null,
    dataNascimento: string,
    disciplinasMinistradas: DisciplinaModel[] | null
}