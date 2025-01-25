package com.cefetmg.reserva_facil_laboratorios.services.impl;

import com.cefetmg.reserva_facil_laboratorios.models.Disciplina;
import com.cefetmg.reserva_facil_laboratorios.models.Professor;
import com.cefetmg.reserva_facil_laboratorios.repositories.DisciplinaRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.DisciplinaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.DisciplinaService;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ProfessorService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DisciplinaServiceImpl implements DisciplinaService {

  @Autowired private DisciplinaRepository disciplinaRepository;
  @Autowired private ProfessorService professorService;

  @Override
  public Disciplina cadastrarDisciplina(DisciplinaRequestDTO disciplinaRequestDTO) {
    Professor professor = professorService.buscarProfessoor(disciplinaRequestDTO.professorId());

    if (!professor
        .getEspecialidade()
        .getEspecialidade()
        .equals(disciplinaRequestDTO.curso().getNomeCurso()))
      throw new RuntimeException(
          "Um professor não pode ministrar uma disciplina na qual ele não é especialista");

    Disciplina disciplina =
        new Disciplina(disciplinaRequestDTO.nome(), disciplinaRequestDTO.curso(), professor);

    try {
      return disciplinaRepository.save(disciplina);
    } catch (Exception e) {
      throw new RuntimeException(
          "Houve um erro ao cadastrar o aluno. Se o problema persistir, tente novamente mais tarde.");
    }
  }

  @Override
  public List<Disciplina> listarDisciplinas() {
    return disciplinaRepository.findAll();
  }

  @Override
  public Disciplina buscarDisciplina(Long codigo) {
    Optional<Disciplina> disciplina = disciplinaRepository.findById(codigo);
    if (disciplina.isEmpty())
      throw new EntityNotFoundException(
          String.format("Não foi encontrada nenhuma disciplina com codigo %s", codigo));

    return disciplina.get();
  }

  @Override
  public Disciplina editarDisciplina(Long codigo, DisciplinaRequestDTO disciplinaRequestDTO) {
    Disciplina disciplina = buscarDisciplina(codigo);

    if (Objects.nonNull(disciplinaRequestDTO.nome())) disciplina.setNome(disciplina.getNome());

    if (Objects.nonNull(disciplinaRequestDTO.curso())) disciplina.setCurso(disciplina.getCurso());

    if (Objects.nonNull(disciplinaRequestDTO.professorId())) {
      Professor novoProfessor =
          professorService.buscarProfessoor(disciplinaRequestDTO.professorId());
      disciplina.setProfessorId(novoProfessor);
    }

    return disciplinaRepository.save(disciplina);
  }

  // TODO: Validar regras de exclusão de disciplinas
  @Override
  public String deletarDisciplina(Long codigo) {
    Disciplina disciplina = buscarDisciplina(codigo);
    disciplinaRepository.deleteById(disciplina.getCodigo());
    return "Disciplina excluída com sucesso!";
  }
}
