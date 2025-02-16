package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Reservas;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ReservaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.response.ReservaResponse;
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
  public ResponseEntity<List<ReservaResponse>> listarReservas() {
    return ResponseEntity.ok(reservaService.listarReservas());
  }

  @GetMapping("/buscarReserva/{id}")
  public ResponseEntity<Reservas> buscarReserva(@PathVariable Long id) {
    return ResponseEntity.ok(reservaService.buscarReserva(id));
  }

  @GetMapping("/deletarReserva/{id}")
  public ResponseEntity<String> deletarReserva(@PathVariable Long id) {
    return ResponseEntity.ok(reservaService.excluirReserva(id));
  }
}
