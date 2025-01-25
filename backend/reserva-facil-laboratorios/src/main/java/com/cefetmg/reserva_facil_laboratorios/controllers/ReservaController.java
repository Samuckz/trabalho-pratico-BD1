package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ReservaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ReservaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/reservas")
public class ReservaController {
  @Autowired private ReservaService reservaService;

  @PostMapping
  public ResponseEntity<Reservas> cadastrarReserva(
      @RequestBody ReservaRequestDTO reservaRequestDTO) {
    return ResponseEntity.ok(reservaService.cadastrarReserva(reservaRequestDTO));
  }

  @GetMapping
  public ResponseEntity<List<Reservas>> listarReservas() {
    return ResponseEntity.ok(reservaService.listarReservas());
  }

  @PostMapping("/buscarReserva")
  public ResponseEntity<Reservas> buscarReserva(@RequestBody ReservaRequestDTO reservaRequestDTO) {
    return ResponseEntity.ok(reservaService.buscarReserva(reservaRequestDTO));
  }

  @DeleteMapping
  public ResponseEntity<String> deletarReserva(@RequestBody ReservaRequestDTO reservaRequestDTO) {
    return ResponseEntity.ok(reservaService.excluirReserva(reservaRequestDTO));
  }
}
