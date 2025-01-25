package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Laboratorio;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.LaboratorioRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.LaboratorioService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("laboratorios")
public class LaboratorioController {

  @Autowired private LaboratorioService laboratorioService;

  @PostMapping
  public ResponseEntity<Laboratorio> cadastrarLaboratorio(@RequestBody LaboratorioRequestDTO dto) {
    return ResponseEntity.ok(laboratorioService.cadastrarLaboratorio(dto));
  }

  @GetMapping
  public ResponseEntity<List<Laboratorio>> listarLaboratorios() {
    return ResponseEntity.ok(laboratorioService.listarLaboratorios());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Laboratorio> buscarLaboratorio(@PathVariable Long id) {
    return ResponseEntity.ok(laboratorioService.buscarLaboratorio(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Laboratorio> editarLaboratorio(
      @PathVariable Long id, @RequestBody LaboratorioRequestDTO dto) {
    return ResponseEntity.ok(laboratorioService.editarLaboratorio(id, dto));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<String> deletarLaboratorio(@PathVariable Long id) {
    return ResponseEntity.ok(laboratorioService.deletarLaboratorio(id));
  }
}
