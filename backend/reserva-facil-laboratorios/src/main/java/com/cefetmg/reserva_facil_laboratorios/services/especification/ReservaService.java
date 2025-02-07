package com.cefetmg.reserva_facil_laboratorios.services.especification;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ReservaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.ReservaResponse;

import java.util.List;

public interface ReservaService {
  Reservas cadastrarReserva(ReservaRequestDTO reservaRequestDTO);

  List<ReservaResponse> listarReservas();

  Reservas buscarReserva(ReservaRequestDTO reservaRequestDTO);

  String excluirReserva(ReservaRequestDTO reservaRequestDTO);
}
