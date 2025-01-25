package com.cefetmg.reserva_facil_laboratorios.services.impl;

import com.cefetmg.reserva_facil_laboratorios.models.Professor;
import com.cefetmg.reserva_facil_laboratorios.repositories.ProfessorRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ProfessorRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ProfessorService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.ValidationException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProfessorServiceImpl implements ProfessorService {

  @Autowired private ProfessorRepository professorRepository;

  @Override
  public Professor cadastrarProfessor(ProfessorRequestDTO professorRequestDTO) {
    Professor professor =
        new Professor(
            professorRequestDTO.nome(),
            professorRequestDTO.especialidade(),
            professorRequestDTO.dataNascimento());

    try {
      return professorRepository.save(professor);
    } catch (Exception e) {
      throw new RuntimeException(
          "Houve um erro ao cadastrar o professor. Se o problema persistir, tente novamente mais tarde.");
    }
  }

  @Override
  public List<Professor> listarProfessores() {
    return professorRepository.findAll();
  }

  @Override
  public Professor buscarProfessoor(Long id) {
    Optional<Professor> professor = professorRepository.findById(id);

    if (professor.isEmpty())
      throw new EntityNotFoundException(
          String.format("Não foi encontrado nenhum professor com id %s", id));

    return professor.get();
  }

  @Override
  public Professor editarProfessoor(Long id, ProfessorRequestDTO professorRequestDTO) {
    Professor professorEditado = buscarProfessoor(id);
    if (Objects.nonNull(professorRequestDTO.nome()))
      professorEditado.setName(professorRequestDTO.nome());

    if (Objects.nonNull(professorRequestDTO.especialidade()))
      professorEditado.setEspecialidade(professorRequestDTO.especialidade());

    if (Objects.nonNull(professorRequestDTO.dataNascimento()))
      professorEditado.setDataNascimento(professorRequestDTO.dataNascimento());

    return professorRepository.save(professorEditado);
  }

  @Override
  public String deletarProfessor(Long id) {
    Professor professor = buscarProfessoor(id);

    if (!professor.getDisciplinasMinistradas().isEmpty())
      throw new ValidationException(
          "Não é possível excluir professores que estão ministrando alguma disciplina");

    professorRepository.deleteById(id);

    return "Professor deletado com sucesso!";
  }
}
