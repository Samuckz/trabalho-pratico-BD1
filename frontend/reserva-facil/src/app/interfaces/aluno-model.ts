import { CursosEnum } from "./cursos-enum";
import { DisciplinaModel } from "./disciplina-model";

export interface AlunoModel {
    matricula?: number,
    nome: string,
    dataNascimento: string, 
    curso?: CursosEnum | null
  }