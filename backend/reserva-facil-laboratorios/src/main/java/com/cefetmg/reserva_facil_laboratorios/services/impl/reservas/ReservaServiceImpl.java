package com.cefetmg.reserva_facil_laboratorios.services.impl.reservas;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.models.pk.ReservasPK;
import com.cefetmg.reserva_facil_laboratorios.repositories.ReservasRepository;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ReservaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.DisciplinaService;
import com.cefetmg.reserva_facil_laboratorios.services.especification.LaboratorioService;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ReservaService;
import com.cefetmg.reserva_facil_laboratorios.services.impl.reservas.validations.ReservaValidation;
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
    ReservasPK reservasPK =
        new ReservasPK(
            reservaRequestDTO.idLaboratorio(),
            reservaRequestDTO.codigoDisciplina(),
            reservaRequestDTO.agendamento());

    reserva.setReservasPK(reservasPK);

    validarDadosReserva(reservaRequestDTO, reserva);


    try {
      return reservasRepository.save(reserva);
    } catch (Exception e) {
      throw new RuntimeException(
          "Houve um erro ao cadastrar a reserva. Se o problema persistir, tente novamente mais tarde.");
    }
  }

  @Override
  public List<Reservas> listarReservas() {
    return reservasRepository.findAll();
  }

  @Override
  public Reservas buscarReserva(ReservaRequestDTO reservaRequestDTO) {
    ReservasPK reservasPK =
        new ReservasPK(
            reservaRequestDTO.idLaboratorio(),
            reservaRequestDTO.codigoDisciplina(),
            reservaRequestDTO.agendamento());
    Optional<Reservas> reserva = reservasRepository.findById(reservasPK);

    if (reserva.isEmpty()) throw new EntityNotFoundException("Não foi encontrada nenhuma reserva");

    return reserva.get();
  }

  @Override
  public String excluirReserva(ReservaRequestDTO reservaRequestDTO) {
    Reservas reserva = buscarReserva(reservaRequestDTO);
    reservasRepository.delete(reserva);
    return "Reserva excluída com sucesso!";
  }

  private void validarDadosReserva(ReservaRequestDTO reservaRequestDTO, Reservas reservas) {

    Optional<Reservas> reservaExistente = reservasRepository.findById(reservas.getReservasPK());

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
