package com.cefetmg.reserva_facil_laboratorios.services.impl;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.repositories.LaboratorioRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.LaboratorioService;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class LaboratorioServiceImpl implements LaboratorioService {

  @Autowired private LaboratorioRepository laboratorioRepository;

  @Override
  public Laboratorio cadastrarLaboratorio(LaboratorioRequestDTO cadastrarLaboratorioRequestDTO) {
    log.info("Cadastrando laboratório...");
    Laboratorio laboratorio =
        new Laboratorio(
            cadastrarLaboratorioRequestDTO.nome(),
            cadastrarLaboratorioRequestDTO.capacidadeMaxima(),
            cadastrarLaboratorioRequestDTO.predio(),
            cadastrarLaboratorioRequestDTO.sala());
    return laboratorioRepository.save(laboratorio);
  }

  @Override
  public List<Laboratorio> listarLaboratorios() {
    return laboratorioRepository.findAll();
  }

  @Override
  public Laboratorio buscarLaboratorio(Long id) {
    Optional<Laboratorio> laboratorio = laboratorioRepository.findById(id);
    if (laboratorio.isEmpty())
      throw new EntityNotFoundException(
          String.format("Não foi encontrado nenhum laboratório com id %s", id));

    return laboratorio.get();
  }

  @Override
  public Laboratorio editarLaboratorio(Long id, LaboratorioRequestDTO dto) {
    Laboratorio labEditado = buscarLaboratorio(id);
    if (Objects.nonNull(dto.capacidadeMaxima()))
      labEditado.setCapacidadeMaxima(dto.capacidadeMaxima());

    if (Objects.nonNull(dto.nome())) labEditado.setNome(dto.nome());

    if (Objects.nonNull(dto.sala())) labEditado.setSala(dto.sala());

    if (Objects.nonNull(dto.predio())) labEditado.setPredio(dto.predio());

    return laboratorioRepository.save(labEditado);
  }

  @Override
  public String deletarLaboratorio(Long id) {
    Laboratorio validarLabExistente = buscarLaboratorio(id);
    laboratorioRepository.deleteById(validarLabExistente.getId());
    return "Laboratório excluído com sucesso";
  }
}
