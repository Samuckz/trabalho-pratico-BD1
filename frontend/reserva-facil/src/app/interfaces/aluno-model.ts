import { CursosEnum } from "./CursosEnum.enum";
import { DisciplinaModel } from "./DisciplinaEntity";

export interface AlunoModel {
    matricula: number,
    nome: string,
    dataNascimento: string, 
    curso: CursosEnum,
    disciplinasMatriculadas: DisciplinaModel[]
  }