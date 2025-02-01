package com.cefetmg.reserva_facil_laboratorios.services.impl;

import com.cefetmg.reserva_facil_laboratorios.models.Aluno;
import com.cefetmg.reserva_facil_laboratorios.repositories.AlunoRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.AlunoRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.AlunoService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AlunoServiceImpl implements AlunoService {
  @Autowired private AlunoRepository alunoRepository;

  @Override
  public Aluno cadastrarAluno(AlunoRequestDTO alunoRequestDTO) {
    Aluno aluno =
        new Aluno(
            alunoRequestDTO.nome(), alunoRequestDTO.dataNascimento(), alunoRequestDTO.curso());

    try {
      return alunoRepository.save(aluno);
    } catch (Exception e) {
      throw new RuntimeException(
          "Houve um erro ao cadastrar o aluno. Se o problema persistir, tente novamente mais tarde.");
    }
  }

  @Override
  public List<Aluno> listarAlunos() {
    return alunoRepository.findAll();
  }

  @Override
  public Aluno buscarAluno(Long matricula) {
    Optional<Aluno> aluno = alunoRepository.findById(matricula);

    if (aluno.isEmpty())
      throw new EntityNotFoundException(
          String.format("Não foi encontrado nenhum aluno com matricula %s", matricula));

    return aluno.get();
  }

  @Override
  public Aluno editarAluno(Long matricula, AlunoRequestDTO alunoRequestDTO) {
    Aluno alunoEditado = buscarAluno(matricula);

    if (Objects.nonNull(alunoRequestDTO.nome())) alunoEditado.setNome(alunoRequestDTO.nome());

    if (Objects.nonNull(alunoRequestDTO.curso())) alunoEditado.setCurso(alunoRequestDTO.curso());

    if (Objects.nonNull(alunoRequestDTO.dataNascimento()))
      alunoEditado.setDataNascimento(alunoRequestDTO.dataNascimento());

    return alunoRepository.save(alunoEditado);
  }

  @Override
  public String deletarAluno(Long matricula) {
    Aluno aluno = buscarAluno(matricula);
    alunoRepository.deleteById(aluno.getMatricula());
    return "Aluno deletado com sucesso";
  }
  
}
