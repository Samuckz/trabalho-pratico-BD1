export interface ReservaDTO {
  id: number,
  horario: string,
  idLaboratorio: number,
  codigoDisciplina: number,
  laboratorio: string,
  predio: number,
  sala: number,
  disciplina: string
}

export interface ReservaEntity {
  id?: number,
  agendamento: string,
  idLaboratorio?: number | null,
  codigoDisciplina?: number | null,
}
