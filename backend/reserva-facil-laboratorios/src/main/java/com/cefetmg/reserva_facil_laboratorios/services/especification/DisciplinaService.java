package com.cefetmg.reserva_facil_laboratorios.services.especification;

import com.cefetmg.reserva_facil_laboratorios.models.Disciplina;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.DisciplinaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.DisciplinaResponseDTO;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.MatriculaResponseDTO;

import java.util.List;

public interface DisciplinaService {
  Disciplina cadastrarDisciplina(DisciplinaRequestDTO disciplinaRequestDTO);

  List<DisciplinaResponseDTO> listarDisciplinas();

  Disciplina buscarDisciplina(Long codigo);

  Disciplina editarDisciplina(Long codigo, DisciplinaRequestDTO disciplinaRequestDTO);

  String deletarDisciplina(Long codigo);

  List<MatriculaResponseDTO> listarMatriculas();

  List<DisciplinaResponseDTO> listarDisciplinasComCapacidadeMaxima();

}
