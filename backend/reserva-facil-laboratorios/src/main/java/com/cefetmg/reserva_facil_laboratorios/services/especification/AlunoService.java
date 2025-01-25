package com.cefetmg.reserva_facil_laboratorios.services.especification;

import com.cefetmg.reserva_facil_laboratorios.models.Aluno;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.AlunoRequestDTO;
import java.util.List;

public interface AlunoService {
  Aluno cadastrarAluno(AlunoRequestDTO alunoRequestDTO);

  List<Aluno> listarAlunos();

  Aluno buscarAluno(Long matricula);

  Aluno editarAluno(Long matricula, AlunoRequestDTO alunoRequestDTO);

  String deletarAluno(Long matricula);
}
