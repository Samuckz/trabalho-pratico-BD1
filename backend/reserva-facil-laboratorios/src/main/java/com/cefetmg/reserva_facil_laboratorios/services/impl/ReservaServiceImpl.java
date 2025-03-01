package com.cefetmg.reserva_facil_laboratorios.services.impl;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.repositories.ReservasRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ReservaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.repositories.projections.ReservaResponse;
import com.cefetmg.reserva_facil_laboratorios.services.especification.DisciplinaService;
import com.cefetmg.reserva_facil_laboratorios.services.especification.LaboratorioService;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ReservaService;
import com.cefetmg.reserva_facil_laboratorios.services.impl.validations.reserva.ReservaValidation;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaServiceImpl implements ReservaService {

  @Autowired private ReservasRepository reservasRepository;
  @Autowired private DisciplinaService disciplinaService;
  @Autowired private LaboratorioService laboratorioService;

  @Autowired
  private List<ReservaValidation> reservaValidations;

  // @TODO: Implementar validação de laboratorios reservados para determinada disciplina
  @Override
  public Reservas cadastrarReserva(ReservaRequestDTO reservaRequestDTO) {


    Reservas reserva = new Reservas();

    reserva.setIdLaboratorio(reservaRequestDTO.idLaboratorio());
    reserva.setCodigoDisciplina(reservaRequestDTO.codigoDisciplina());
    reserva.setAgendamento(reservaRequestDTO.agendamento());


    validarDadosReserva(reservaRequestDTO, reserva);


    try {
      return reservasRepository.save(reserva);
    } catch (Exception e) {
      throw new RuntimeException(
          "Houve um erro ao cadastrar a reserva. Se o problema persistir, tente novamente mais tarde.");
    }
  }

  @Override
  public List<ReservaResponse> listarReservas() {
    return reservasRepository.buscarDadosReserva();
  }

  @Override
  // TODO: Adaptar rota para devolver valores plausivies de servem exibidos
  public Reservas buscarReserva(Long id) {
    Optional<Reservas> reserva = reservasRepository.findById(id);

    if (reserva.isEmpty()) throw new EntityNotFoundException("Não foi encontrada nenhuma reserva");

    return reserva.get();
  }

  @Override
  public String excluirReserva(Long id) {
    Reservas reserva = buscarReserva(id);
    reservasRepository.delete(reserva);
    return "Reserva excluída com sucesso!";
  }

  private void validarDadosReserva(ReservaRequestDTO reservaRequestDTO, Reservas reservas) {

    Optional<Reservas> reservaExistente = reservasRepository.findByIdLaboratorioAndCodigoDisciplinaAndAgendamento(
            reservaRequestDTO.idLaboratorio(), reservaRequestDTO.codigoDisciplina(), reservaRequestDTO.agendamento()
    );

    if(reservaExistente.isPresent())
      throw new RuntimeException("Reserva já cadastrada no sistema!");

    try {
      laboratorioService.buscarLaboratorio(reservaRequestDTO.idLaboratorio());
      disciplinaService.buscarDisciplina(reservaRequestDTO.codigoDisciplina());

    } catch (EntityNotFoundException e) {
      throw new RuntimeException("Favor validar os dados de reserva!");
    }


    reservaValidations.forEach(validacao -> validacao.validar(reservas));
  }
}
