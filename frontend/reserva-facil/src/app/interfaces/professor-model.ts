import { CursosEnum } from "./CursosEnum.enum";
import { DisciplinaModel } from "./DisciplinaEntity";

export interface ProfessorModel {
    id: number,
    name: string,
    especialidade: CursosEnum,
    dataNascimento: string,
    disciplinasMinistradas: DisciplinaModel[] 
}