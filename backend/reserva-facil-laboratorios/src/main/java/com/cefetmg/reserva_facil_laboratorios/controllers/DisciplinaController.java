package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Disciplina;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.DisciplinaRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.MatricularAlunoRequest;
import com.cefetmg.reserva_facil_laboratorios.services.especification.DisciplinaService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/disciplinas")
public class DisciplinaController {
  @Autowired private DisciplinaService disciplinaService;

  @PostMapping
  public ResponseEntity<Disciplina> cadastrarDisciplina(
      @RequestBody DisciplinaRequestDTO disciplinaRequestDTO) {
    return ResponseEntity.ok(disciplinaService.cadastrarDisciplina(disciplinaRequestDTO));
  }

  @GetMapping
  public ResponseEntity<List<Disciplina>> listarDisciplinas() {
    return ResponseEntity.ok(disciplinaService.listarDisciplinas());
  }

  @GetMapping("/{codigo}")
  public ResponseEntity<Disciplina> buscarDisciplina(@PathVariable Long codigo) {
    return ResponseEntity.ok(disciplinaService.buscarDisciplina(codigo));
  }

  @PutMapping("/{codigo}")
  public ResponseEntity<Disciplina> editarDisciplina(
      @PathVariable Long codigo, @RequestBody DisciplinaRequestDTO disciplinaRequestDTO) {
    return ResponseEntity.ok(disciplinaService.editarDisciplina(codigo, disciplinaRequestDTO));
  }

  @DeleteMapping("/{codigo}")
  public ResponseEntity<String> deletarDisciplina(@PathVariable Long codigo) {
    return ResponseEntity.ok(disciplinaService.deletarDisciplina(codigo));
  }
}
