package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Professor;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.ProfessorRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.especification.ProfessorService;
import java.util.List;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("professores")
@Slf4j
public class ProfessorController {

  @Autowired private ProfessorService professorService;

  @PostMapping
  public ResponseEntity<Professor> cadastrarProfessor(
      @RequestBody ProfessorRequestDTO professorRequestDTO) {
    log.info("Cadastrando professor...");
    return ResponseEntity.ok(professorService.cadastrarProfessor(professorRequestDTO));
  }

  @GetMapping
  public ResponseEntity<List<Professor>> listarProfessores() {
    log.info("Listando professores...");
    return ResponseEntity.ok(professorService.listarProfessores());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Professor> buscarProfessor(@PathVariable Long id) {
    log.info(String.format("Buscando professor de id %s", id));
    return ResponseEntity.ok(professorService.buscarProfessoor(id));
  }

  @PutMapping("/{id}")
  public ResponseEntity<Professor> editarProfessor(
      @PathVariable Long id, @RequestBody ProfessorRequestDTO professorRequestDTO) {
    log.info(String.format("Editando professor de id %s", id));
    return ResponseEntity.ok(professorService.editarProfessoor(id, professorRequestDTO));
  }

  @DeleteMapping("{id}")
  public ResponseEntity<String> deletarProfessor(@PathVariable Long id) {
    log.info(String.format("Deletando professor de id %s", id));
    return ResponseEntity.ok(professorService.deletarProfessor(id));
  }
}
