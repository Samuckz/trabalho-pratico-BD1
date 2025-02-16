package com.cefetmg.reserva_facil_laboratorios.controllers;

import com.cefetmg.reserva_facil_laboratorios.models.Aluno;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.AlunoRequestDTO;
import com.cefetmg.reserva_facil_laboratorios.services.dtos.request.MatricularAlunoRequest;
import com.cefetmg.reserva_facil_laboratorios.services.especification.AlunoService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("alunos")
public class AlunoController {
  @Autowired private AlunoService alunoService;

  @PostMapping
  public ResponseEntity<Aluno> cadastrarAluno(@RequestBody AlunoRequestDTO alunoRequestDTO) {
    return ResponseEntity.ok(alunoService.cadastrarAluno(alunoRequestDTO));
  }

  @GetMapping
  public ResponseEntity<List<Aluno>> listarAlunos() {
    return ResponseEntity.ok(alunoService.listarAlunos());
  }

  @GetMapping("/{matricula}")
  public ResponseEntity<Aluno> buscarAluno(@PathVariable Long matricula) {
    return ResponseEntity.ok(alunoService.buscarAluno(matricula));
  }

  @PutMapping("/{matricula}")
  public ResponseEntity<Aluno> editarAluno(
      @PathVariable Long matricula, @RequestBody AlunoRequestDTO alunoRequestDTO) {
    return ResponseEntity.ok(alunoService.editarAluno(matricula, alunoRequestDTO));
  }

  @GetMapping("/deletarAluno/{matricula}")
  public ResponseEntity<String> deletarAluno(@PathVariable Long matricula) {
    return ResponseEntity.ok(alunoService.deletarAluno(matricula));
  }

  @PostMapping("/matricular-aluno")
  public ResponseEntity<String> matricularAluno(@RequestBody MatricularAlunoRequest matricularAlunoRequest){
    alunoService.matricularAluno(matricularAlunoRequest);
    return ResponseEntity.ok("Aluno matriculado com sucesso!");
  }
}
