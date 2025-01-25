package com.cefetmg.reserva_facil_laboratorios.services.especification;

import com.cefetmg.reserva_facil_laboratorios.models.Professor;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ProfessorRequestDTO;
import java.util.List;

public interface ProfessorService {
  Professor cadastrarProfessor(ProfessorRequestDTO professorRequestDTO);

  List<Professor> listarProfessores();

  Professor buscarProfessoor(Long id);

  Professor editarProfessoor(Long id, ProfessorRequestDTO professorRequestDTO);

  String deletarProfessor(Long id);
}
